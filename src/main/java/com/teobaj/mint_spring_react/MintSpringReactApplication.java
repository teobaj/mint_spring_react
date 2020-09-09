package com.teobaj.mint_spring_react;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class MintSpringReactApplication {

	public static void main(String[] args) {
		SpringApplication.run(MintSpringReactApplication.class, args);
	}

}
