package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
//@CucumberOptions(features = "src/test/resources/Features/Career.feature", glue = "stepDefinition", plugin = { "pretty",
//		"html:CareerModuleReports/TestNGReports/htmlreport", "json:CareerModuleReports/TestNGReports/jsonreport.json",
//		"junit:CareerModuleReports/TestNGReports/xmlreport.xml",
//		"com.cucumber.listener.ExtentCucumberFormatter:CareerModuleReports/TestNGReports/cucumber-reports/report.html" })

@CucumberOptions(features = "src/test/resources/Features/Application.feature", glue = "stepDefinition", plugin = {
		"pretty", "html:ApplicationModuleReports/TestNGReports/htmlreport",
		"json:ApplicationModuleReports/TestNGReports/jsonreport.json",
		"junit:ApplicationModuleReports/TestNGReports/xmlreport.xml",
		"com.cucumber.listener.ExtentCucumberFormatter:ApplicationModuleReports/TestNGReports/cucumber-reports/report.html" })

public class TestNGRunner extends AbstractTestNGCucumberTests {

}
