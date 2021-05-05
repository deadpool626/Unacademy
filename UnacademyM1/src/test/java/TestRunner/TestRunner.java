package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
//@CucumberOptions(features = "src/test/resources/Features/Career.feature", glue = "stepDefinition", tags = {
//		"@Department" }, plugin = "pretty")
//@Location, @Department, @WorkType, @AllFilters, @ClearFilter, @SearchValid, @SearchInvalid

@CucumberOptions(features = "src/test/resources/Features/Application.feature", glue = "stepDefinition", tags = {
		"@InvalidRelExperience" }, plugin = "pretty")
//@ValidApplication, @InvalidNumber, @InvalidLocation, @InvalidRelExperience
public class TestRunner extends AbstractTestNGCucumberTests {

}

//package runner;
//cucumber.runtime.DuplicateStepDefinitionException: Duplicate step definitions in stepDefinition.ApplicationStepDef.user_enters_invalid_location(String) in file:/C:/Users/ANAGARGO/git/Unacademy/UnacademyM1/target/test-classes/ and stepDefinition.ApplicationStepDef.user_enters_invalid_mobile_number(String) in file:/C:/Users/ANAGARGO/git/Unacademy/UnacademyM1/target/test-classes/

//import cucumber.api.CucumberOptions;
//import cucumber.api.testng.AbstractTestNGCucumberTests;
// 
//@CucumberOptions(features="Feature/backgrounddemo.feature",glue= {"stepDefinition"})
//public class TestRunner1 extends AbstractTestNGCucumberTests{
//}