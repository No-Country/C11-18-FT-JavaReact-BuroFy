package com.burofy.appWebBurofy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

import java.lang.reflect.InvocationTargetException;


//@OpenAPIDefinition(info = @Info(title = "Swagger Burofy", version = "1.0", description = "Documentation APIs v1.0"))
@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })

public class AppWebBurofyApplication {

	public static void main(String[] args){

		SpringApplication.run(AppWebBurofyApplication.class);
//		Object casa = SpringApplication.run(AppWebBurofyApplication.class, args);
//

//		System.out.println("Acaá el error " + casa);
	}

}
