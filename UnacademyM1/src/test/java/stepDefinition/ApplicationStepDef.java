package stepDefinition;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import PageFactoryPOM.ApplicationPageFactory;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ApplicationStepDef {
	WebDriver driver;
	ApplicationPageFactory obj;

	@Given("^user has selected a job$")

	public void user_has_selected_a_job() throws Throwable {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\ANAGARGO\\Documents\\SeleniumTool\\SeleniumSoftware\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		// driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		obj = new ApplicationPageFactory(driver);
		obj = PageFactory.initElements(driver, ApplicationPageFactory.class);
		driver.get("https://unacademy.com/");
		driver.manage().window().maximize();

		driver.navigate().to("https://apply.workable.com/unacademy/");
		driver.findElement(By.cssSelector("input[placeholder='Search jobs…']")).sendKeys("Java");
		Thread.sleep(3000);
		driver.findElement(By.xpath("//li[1]//div[1]//a[1]")).click();
	}

	@When("^user clicks on apply now$")
	public void user_clicks_on_apply_now() throws Throwable {
		Thread.sleep(3000);
		obj.ApplyNow();
	}

	@When("^enters valid data$")
	public void enters_valid_data() throws Throwable {
		Thread.sleep(3000);
		obj.SetFNLNEmail("abc", "xyz", "abcxyz@gmail.com");
		obj.SetPhoneNumber("9876543210");
		obj.SetLocation("Delhi");
		obj.SetExperience();
		obj.SetRelExperience("3");
		obj.FileUpload();
		obj.SetCurSalary("100000");
		obj.SetNoticePeriod();
		Thread.sleep(5000);
		obj.Submit();
	}

	@Then("^application is submitted$")
	public void application_is_submitted() throws Throwable {
		Thread.sleep(5000);
		assertEquals(obj.SuccessMesaage(), true);
		driver.close();
	}

	@Given("^clicked on apply now$")
	public void clicked_on_apply_now() throws Throwable {
		Thread.sleep(3000);
		obj.ApplyNow();
	}

	String number;
	boolean res;
	int i = 0;

	@When("^user enters an invalid ([^\\\"]*)$")
	public void user_enters_an_invalid(String arg) throws Throwable {
		Thread.sleep(3000);
		number = arg;
		obj.SetFNLNEmail("abc", "xyz", "abcxyz@gmail.com");
		obj.SetPhoneNumber(number);
		res = obj.ValidatePhone(number);
	}

	@Then("^user clicks on submit button$")
	public void user_clicks_on_submit_button() throws InterruptedException {
		Thread.sleep(2000);
		obj.Submit();
		Thread.sleep(1500);
	}

	@Then("^invalid phone number is displyed$")
	public void error_is_displyed() {
		if (res == false) {
			System.out.println("Incorrect Phone");
			boolean b = obj.CheckPhoneError();
			assertTrue(b);
		}
		driver.close();
	}

	String location;

	@When("^user enters invalid as([^\\\"]*)$")
	public void user_enters_invalid_as(String arg) throws Throwable {
		location = arg;
		Thread.sleep(3000);
		obj.SetLocation(location);
		res = obj.ValidateLocation(location);
	}

	@Then("^Location is not valid message is displayed$")
	public void location_is_not_valid_message_is_displayed() throws Throwable {
		if (res == false) {
			System.out.println("+++++Incorrect Location+++++" + location);
			boolean b = obj.CheckLocError();
			assertTrue(b);
		}
		driver.close();
	}

	String exp;

	@When("^user enters invalid the([^\\\"]*)$")
	public void user_enters_invalid_the(String arg) throws Throwable {
		exp = arg;
		Thread.sleep(3000);
		obj.SetRelExperience(exp);
		res = obj.ValidateRelExperience(exp);
	}

	@Then("^Invalid relative experience message should be displayed$")
	public void invalid_relative_experience_message_should_be_displayed() throws Throwable {
		if (res == false) {
			System.out.println("+++++Incorrect Relevant Experience+++++");
			boolean b = obj.CheckExpError();
			assertTrue(b);
		}
		driver.close();
	}

	// @AfterMethod

}
