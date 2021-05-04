package stepDefinition;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import PageFactoryPOM.CareersPOM;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CareerStepDef {
	WebDriver driver;
	CareersPOM obj;

	@Before("@StartCareer")
	public void openBrowser() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\ANAGARGO\\Documents\\SeleniumTool\\SeleniumSoftware\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		// driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		obj = new CareersPOM(driver);
		obj = PageFactory.initElements(driver, CareersPOM.class);
		driver.get("https://unacademy.com/");
		driver.manage().window().maximize();

		driver.navigate().to("https://apply.workable.com/unacademy/");
//		Thread.sleep(3000);
//		driver.manage().timeouts().implicitlyWait(10, TimeUnit.MINUTES);
//		// Thread.sleep(3000);
//		driver.findElement(By.xpath("//a[@href='https://apply.workable.com/unacademy/']")).click();
//		Thread.sleep(3000);
	}

	@Given("user is on careers page")
	public void user_is_on_careers_page() throws InterruptedException {
		String ExpectedTitle = "Unacademy - Current Openings";
		String ActualTitle = driver.getTitle();
		assertEquals(ActualTitle, ExpectedTitle);
		if (ExpectedTitle.equals(ActualTitle)) {
			System.out.println("*****User is on right page*****");
		} else {
			System.out.println("*****User is on wrong page*****");
		}
	}

	@When("user selects a location")
	public void user_selects_a_location() throws InterruptedException {

		obj.setLocation();
	}

	@Then("jobs available at the location are displayed")
	public void results_are_updated_according_to_the_selected_location() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Thread.sleep(1000);

		boolean res = obj.checkLocation();
		assertEquals(res, true);
		driver.close();
	}

	String dept;

	@When("user selects a department")
	public void user_selects_a_department() throws InterruptedException {
		dept = "Corporate Functions";
		obj.setDepartment(dept);

	}

	@Then("job title shown only for the department")
	public void results_are_updated_according_to_the_selected_department() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Thread.sleep(1000);
		boolean res = obj.checkDepartment(dept);
		assertEquals(res, true);
		driver.close();
	}

	@When("user selects a work type")
	public void user_selects_a_work_type() {
		obj.setWorkType();
	}

	@Then("titles with selected Work Type are displayed")
	public void results_are_updated_according_to_the_selected_work_type() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Thread.sleep(1000);

		boolean res = obj.checkWorkType();
		assertEquals(res, true);
		driver.close();
	}

	@When("user selects any location, department, work type")
	public void user_selects_any_location_department_work_type() throws InterruptedException {
		obj.setLocation();
		dept = "Corporate Functions";
		obj.setDepartment(dept);
		obj.setWorkType();
	}

	@Then("results are updated")
	public void results_are_updated_according_to_the_selected_location_department_work_type()
			throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Thread.sleep(1000);
		boolean res = obj.checkLocation();
		assertEquals(res, true);

		res = obj.checkDepartment(dept);
		assertEquals(res, true);

		res = obj.checkWorkType();
		assertEquals(res, true);
		driver.close();
	}

	@Given("user have selected some filters")
	public void user_have_selected_some_filters() {
		obj.setLocation();
		dept = "Corporate Functions";
		obj.setDepartment(dept);
		obj.setWorkType();
	}

	@When("user clicks on clear filters")
	public void user_clicks_on_clear_filters() {
		obj.ClickClear();
	}

	@Then("all jobs are displayed")
	public void all_jobs_are_displayed() {
		boolean res = obj.CheckClear();
		assertEquals(res, false);
		driver.close();
	}

	String expectedtitle = "Associate";

	@When("user inputs a particular job title")
	public void user_inputs_a_particular_job_title() {
		obj.SearchTitle(expectedtitle);
	}

	@Then("respective job is displayed")
	public void respective_job_is_displayed() throws InterruptedException {
		Thread.sleep(4000);
		String actualTitle = obj.ValidateTitle();
		boolean res = actualTitle.contains(expectedtitle);
		assertTrue(res);
		driver.close();
	}

	String title = "qwert";

	@When("user inputs irrelevant keywords")
	public void user_inputs_irrelevant_keywords() {
		obj.SearchTitle(title);
	}

	@Then("error message displayed")
	public void error_message_displayed() throws InterruptedException {
		Thread.sleep(4000);
		assertEquals(obj.ErrorMessage(), true);
		driver.close();
	}

}
