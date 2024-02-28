package com.board.boardback.config;

import com.board.boardback.config.auth.PrincipalDetailsService;
import com.board.boardback.config.jwt.JwtAuthenticationFilter;
import com.board.boardback.config.jwt.JwtAuthorizationFilter;
import com.board.boardback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PrincipalDetailsService principalDetailsService;

	@Bean
	public AuthenticationManager authenticationManager(){
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
		authProvider.setUserDetailsService(principalDetailsService);
		authProvider.setPasswordEncoder(encodePwd());
		return new ProviderManager(authProvider);
	}

	@Bean
	public BCryptPasswordEncoder encodePwd() {
		return new BCryptPasswordEncoder();
	}

	@SuppressWarnings({ "deprecation" })
	@Bean
	SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
				.csrf().disable()
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
				.and()
				.formLogin().disable()
				.httpBasic().disable()
				.addFilter(new JwtAuthenticationFilter(authenticationManager()))
				.addFilter(new JwtAuthorizationFilter(authenticationManager(), userRepository))
				.authorizeRequests()
				.requestMatchers("/memberjun/all").hasRole("ADMIN")
				.anyRequest().permitAll();

        return http.build();
	}

}