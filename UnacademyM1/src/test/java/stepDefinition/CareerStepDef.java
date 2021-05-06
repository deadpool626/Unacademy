package stepDefinition;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import java.io.FileReader;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;

import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;

import PageFactoryPOM.CareerPOM;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CareerStepDef {
	WebDriver driver;
	CareerPOM obj;
	CSVReader csvReader;

//	@Before("@StartCareer")
//	public void openBrowser() throws InterruptedException {
//		System.setProperty("webdriver.chrome.driver",
//				"C:\\Users\\ANAGARGO\\Documents\\SeleniumTool\\SeleniumSoftware\\chromedriver_win32\\chromedriver.exe");
//		driver = new ChromeDriver();
//		// driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//		obj = new CareerPOM(driver);
//		obj = PageFactory.initElements(driver, CareerPOM.class);
//		driver.get("https://unacademy.com/");
//		driver.manage().window().maximize();
//
//		driver.navigate().to("https://apply.workable.com/unacademy/");
//		Thread.sleep(3000);
//		driver.manage().timeouts().implicitlyWait(10, TimeUnit.MINUTES);
//		// Thread.sleep(3000);
//		driver.findElement(By.xpath("//a[@href='https://apply.workable.com/unacademy/']")).click();
//		Thread.sleep(3000);
//	}
	@Test(priority = 1)
	@Given("user is on careers page")
	public void user_is_on_careers_page() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\ANAGARGO\\Documents\\SeleniumTool\\SeleniumSoftware\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		// driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		obj = new CareerPOM(driver);
		obj = PageFactory.initElements(driver, CareerPOM.class);
		driver.get("https://unacademy.com/");
		driver.manage().window().maximize();

		driver.navigate().to("https://apply.workable.com/unacademy/");
		String ExpectedTitle = "Unacademy - Current Openings";
		String ActualTitle = driver.getTitle();
		assertEquals(ActualTitle, ExpectedTitle);
		if (ExpectedTitle.equals(ActualTitle)) {
			System.out.println("*****User is on right page*****");
		} else {
			System.out.println("*****User is on wrong page*****");
		}
	}

	@Test(priority = 2)
	@When("user selects a location")
	public void user_selects_a_location() throws InterruptedException {

		obj.setLocation();
	}

	@Test(priority = 3)
	@Then("jobs available at the location are displayed")
	public void results_are_updated_according_to_the_selected_location() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Thread.sleep(1000);

		boolean res = obj.checkLocation();
		assertEquals(res, true);
		driver.close();
	}

	String dept;
	boolean[] res = new boolean[3];

	@Test(priority = 2)
	@When("user selects a department")
	public void user_selects_a_department() throws InterruptedException, CsvValidationException, IOException {
		csvReader = new CSVReader(
				new FileReader("C:\\Users\\ANAGARGO\\Documents\\SeleniumTool\\SeleniumSoftware\\Departments.csv"));
		String data[];
		while ((data = csvReader.readNext()) != null) {
			for (int i = 0; i < data.length; i++) {
				driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
				Thread.sleep(2000);
				obj.setDepartment(data[i]);
				driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
				Thread.sleep(1000);
				res[i] = obj.checkDepartment(data[i], true);
			}
		}

	}

	@Test(priority = 3)
	@Then("job title shown only for the department")
	public void results_are_updated_according_to_the_selected_department() throws InterruptedException {
		for (int i = 0; i < 3; i++) {
			assertEquals(res[i], true);
		}

		driver.close();
	}

	@Test(priority = 2)
	@When("user selects a work type")
	public void user_selects_a_work_type() throws InterruptedException {
		obj.setWorkType();
	}

	@Test(priority = 3)
	@Then("titles with selected Work Type are displayed")
	public void results_are_updated_according_to_the_selected_work_type() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Thread.sleep(1000);

		boolean res = obj.checkWorkType();
		assertEquals(res, true);
		driver.close();
	}

	@Test(priority = 2)
	@When("user selects any location, department, work type")
	public void user_selects_any_location_department_work_type() throws InterruptedException {
		obj.setLocation();
		dept = "Corporate Functions";
		obj.setDepartment(dept);
		obj.setWorkType();
	}

	@Test(priority = 3)
	@Then("results are updated")
	public void results_are_updated_according_to_the_selected_location_department_work_type()
			throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Thread.sleep(1000);

		boolean res = obj.checkLocation();
		assertEquals(res, true);

		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Thread.sleep(1500);

		res = obj.checkDepartment(dept, false);
		assertEquals(res, true);

		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Thread.sleep(1500);

		res = obj.checkWorkType();
		assertEquals(res, true);
		driver.close();
	}

	@Test(priority = 2)
	@Then("user have selected some filters")
	public void user_have_selected_some_filters() throws InterruptedException {
		obj.setLocation();
		dept = "Corporate Functions";
		obj.setDepartment(dept);
		obj.setWorkType();
	}

	@Test(priority = 3)
	@When("user clicks on clear filters")
	public void user_clicks_on_clear_filters() {
		obj.ClickClear();
	}

	@Test(priority = 4)
	@Then("all jobs are displayed")
	public void all_jobs_are_displayed() {
		boolean res = obj.CheckClear();
		assertEquals(res, false);
		driver.close();
	}

	String expectedtitle = "Associate";

	@Test(priority = 2)
	@When("user inputs a particular job title")
	public void user_inputs_a_particular_job_title() {
		obj.SearchTitle(expectedtitle);
	}

	@Test(priority = 3)
	@Then("respective job is displayed")
	public void respective_job_is_displayed() throws InterruptedException {
		Thread.sleep(4000);
		String actualTitle = obj.ValidateTitle();
		boolean res = actualTitle.contains(expectedtitle);
		assertTrue(res);
		driver.close();
	}

	String title = "qwert";

	@Test(priority = 2)
	@When("user inputs irrelevant keywords")
	public void user_inputs_irrelevant_keywords() {
		obj.SearchTitle(title);
	}

	@Test(priority = 3)
	@Then("error message displayed")
	public void error_message_displayed() throws InterruptedException {
		Thread.sleep(4000);
		assertEquals(obj.ErrorMessage(), true);
		driver.close();
	}

}
