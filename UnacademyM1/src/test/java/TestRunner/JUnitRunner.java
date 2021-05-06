package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
//@CucumberOptions(features = "src/test/resources/Features/Career.feature", glue = "stepDefinition", plugin = { "pretty",
//		"html:CareerModuleReports/JUnitReports/htmlreport", "json:CareerModuleReports/JUnitReports/jsonreport.json",
//		"junit:CareerModuleReports/JUnitReports/xmlreport.xml",
//		"com.cucumber.listener.ExtentCucumberFormatter:CareerModuleReports/JUnitReports/cucumber-reports/report.html" })

@CucumberOptions(features = "src/test/resources/Features/Application.feature", glue = "stepDefinition", plugin = {
		"pretty", "html:ApplicationModuleReports/JUnitReports/htmlreport",
		"json:ApplicationModuleReports/JUnitReports/jsonreport.json",
		"junit:ApplicationModuleReports/JUnitReports/xmlreport.xml",
		"com.cucumber.listener.ExtentCucumberFormatter:ApplicationModuleReports/JUnitReports/cucumber-reports/report.html" })

public class JUnitRunner {

}
//extends AbstractTestNGCucumberTests