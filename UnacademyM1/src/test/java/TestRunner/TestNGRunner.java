package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//@CucumberOptions(features = "src/test/resources/Features/Career.feature", glue = "stepDefinition", plugin = { "pretty",
//		"html:Reports/CareerModuleReports/TestNGReports/htmlreport",
//		"json:Reports/CareerModuleReports/TestNGReports/jsonreport.json",
//		"junit:Reports/CareerModuleReports/TestNGReports/xmlreport.xml",
//		"com.cucumber.listener.ExtentCucumberFormatter:Reports/CareerModuleReports/TestNGReports/cucumber-reports/report.html" })

@CucumberOptions(features = "src/test/resources/Features/Application.feature", glue = "stepDefinition", plugin = {
		"pretty", "html:Reports/ApplicationModuleReports/TestNGReports/htmlreport",
		"json:Reports/ApplicationModuleReports/TestNGReports/jsonreport.json",
		"junit:Reports/ApplicationModuleReports/TestNGReports/xmlreport.xml",
		"com.cucumber.listener.ExtentCucumberFormatter:Reports/ApplicationModuleReports/TestNGReports/cucumber-reports/report.html" })

public class TestNGRunner extends AbstractTestNGCucumberTests {

}
