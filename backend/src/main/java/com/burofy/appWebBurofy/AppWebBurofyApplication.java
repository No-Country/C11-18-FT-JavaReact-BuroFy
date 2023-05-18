package com.burofy.appWebBurofy;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


//@OpenAPIDefinition(info = @Info(title = "Swagger Burofy", version = "1.0", description = "Documentation APIs v1.0"))
@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
public class AppWebBurofyApplication {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(AppWebBurofyApplication.class, args);
	}

}
