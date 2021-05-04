package PageFactoryPOM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ApplicationPageFactory {
	WebDriver driver;
	@FindBy(id = "firstname")
	WebElement FirstName;

	@FindBy(id = "lastname")
	WebElement LastName;

	@FindBy(name = "email")
	WebElement Email;

	@FindBy(xpath = "//input[@name='phone']")
	WebElement Phone;

	@FindBy(css = "#CA_5516")
	WebElement Location;

	@FindBy(xpath = "//input[@id='input_CA_5511_input']")
	WebElement Experience;

	@FindBy(xpath = "//input[@name='CA_5512']")
	WebElement RelevantExperience;

	@FindBy(xpath = "//span[@role='button']")
	WebElement File;

	@FindBy(css = "input[name='CA_5513']")
	WebElement Salary;

	@FindBy(xpath = "//input[@id='input_CA_5515_input']")
	WebElement NoticePeriod;

	@FindBy(xpath = "//button[normalize-space()='Submit application']")
	WebElement Submit;
}
