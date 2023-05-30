package com.burofy.appWebBurofy.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

import java.util.Collections;
@Configuration
public class SwaggerConfig {

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiDetails())
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo apiDetails(){
        return new ApiInfo("Spring Boot Burofy API",
                "Buryofy API REST",
                "Version: 1.0",
                "Despliegue: https://backend-web-burofy.onrender.com",
                new Contact(
                        "Burofy",
                        "https://github.com/No-Country/C11-18-FT-JavaReact-BuroFy.git", "burofy@example.com"),
                "MIT",
                "url",
                Collections.emptyList());
    }

}

