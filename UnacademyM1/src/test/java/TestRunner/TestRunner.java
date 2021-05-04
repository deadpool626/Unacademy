package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Features/Career.feature", glue = "stepDefinition", tags = {
		"@Location, @Department, @WorkType, @AllFilters, @ClearFilter, @SearchValid, @SearchInvalid" }, plugin = "pretty")
//@Location, @Department, @WorkType, @AllFilters, @ClearFilter, @SearchValid, @SearchInvalid

public class TestRunner {

}
