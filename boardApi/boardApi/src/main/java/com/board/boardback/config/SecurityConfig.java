package com.board.boardback.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	public BCryptPasswordEncoder encodePwd() {
		return new BCryptPasswordEncoder();
	}

	@SuppressWarnings({ "deprecation" })
	@Bean
	SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http.csrf(csrf -> csrf.disable()).authorizeRequests(requests -> requests
       /*         .requestMatchers("/boardscm/**").authenticated()*/
                .anyRequest().permitAll())
				.formLogin(login -> login
						.loginProcessingUrl("/memberscm/login")
						.usernameParameter("loginId")
						.defaultSuccessUrl("/"));

        return http.build();

	}

}