package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
//@CucumberOptions(features = "src/test/resources/Features/Career.feature", glue = "stepDefinition", plugin = { "pretty",
//		"html:Reports/CareerModuleReports/JUnitReports/htmlreport",
//		"json:Reports/CareerModuleReports/JUnitReports/jsonreport.json",
//		"junit:Reports/CareerModuleReports/JUnitReports/xmlreport.xml",
//		"com.cucumber.listener.ExtentCucumberFormatter:Reports/CareerModuleReports/JUnitReports/cucumber-reports/report.html" })

@CucumberOptions(features = "src/test/resources/Features/Application.feature", glue = "stepDefinition", plugin = {
		"pretty", "html:Reports/ApplicationModuleReports/JUnitReports/htmlreport",
		"json:Reports/ApplicationModuleReports/JUnitReports/jsonreport.json",
		"junit:Reports/ApplicationModuleReports/JUnitReports/xmlreport.xml",
		"com.cucumber.listener.ExtentCucumberFormatter:Reports/ApplicationModuleReports/JUnitReports/cucumber-reports/report.html" })

public class JUnitRunner {

}
//extends AbstractTestNGCucumberTests