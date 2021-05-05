package PageFactoryPOM;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ApplicationPageFactory {
	WebDriver driver;

	@FindBy(xpath = "//a[normalize-space()='Apply for this job']")
	WebElement ApplyButton;

	@FindBy(id = "firstname")
	WebElement FirstName;

	@FindBy(id = "lastname")
	WebElement LastName;

	@FindBy(name = "email")
	WebElement Email;

	@FindBy(xpath = "//input[@name='phone']")
	WebElement Phone;

	@FindBy(css = "#phone_error")
	WebElement PhoneMessage;

	@FindBy(css = "#CA_5516")
	WebElement Location;

	@FindBy(css = "#CA_5516_error")
	WebElement LocationError;

	@FindBy(xpath = "//input[@id='input_CA_5511_input']")
	WebElement Experience;

	@FindBy(xpath = "//li[@value='57022']//div[@role='presentation']")
	WebElement Fresher;

	@FindBy(xpath = "//input[@name='CA_5512']")
	WebElement RelevantExperience;

	@FindBy(css = "#CA_5512_error")
	WebElement RelevantExpError;

	@FindBy(xpath = "//span[@role='button']")
	WebElement File;

	@FindBy(css = "input[name='CA_5513']")
	WebElement Salary;

	@FindBy(xpath = "//input[@id='input_CA_5515_input']")
	WebElement NoticePeriod;

	@FindBy(xpath = "//li[@value='57030']//div[@role='presentation']")
	WebElement Days15;

	@FindBy(xpath = "//button[normalize-space()='Submit application']")
	WebElement Submit;

	@FindBy(xpath = "//h3[normalize-space()='Your application has been submitted successfully.']")
	WebElement SuccessMessage;

	public ApplicationPageFactory(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void ApplyNow() {
		ApplyButton.click();
	}

	public void SetFNLNEmail(String FN, String LN, String email) {
		FirstName.sendKeys(FN);
		LastName.sendKeys(LN);
		Email.sendKeys(email);
	}

	public void SetPhoneNumber(String no) {
		Phone.sendKeys(no);
	}

	public boolean ValidatePhone(String number) {
		Pattern p = Pattern.compile("^[7-9][0-9]{9}$");
		Matcher m = p.matcher(number);
		boolean b = m.matches();
		return b;
	}

	public boolean CheckPhoneError() {
		try {
			PhoneMessage.isDisplayed();
			return true;
		} catch (NoSuchElementException e) {
			return false;
		}
	}

	public void SetLocation(String loc) {
		Location.sendKeys(loc);
	}

	public boolean ValidateLocation(String loc) {
		if (loc.length() <= 20) {
			Pattern p = Pattern.compile("^[a-zA-Z\\s]*$");
			Matcher m = p.matcher(loc);
			boolean b = m.matches();
			System.out.println("Location Less than 21 and matcher : " + b);
			return b;
		}
		return false;
	}

	public boolean CheckLocError() {
		try {
			LocationError.isDisplayed();
			return true;
		} catch (NoSuchElementException e) {
			return false;
		}
	}

	public void SetExperience() {
		Experience.click();
		Fresher.click();
	}

	public void SetRelExperience(String years) {
		RelevantExperience.sendKeys(years);
	}

	public boolean ValidateRelExperience(String exp1) {
		// exp1 = exp1.replaceAll("\\s", "");
		int exp = Integer.valueOf(exp1.trim());
		System.out.println("+++++ Relevant Experience +++++" + exp1);
		if (exp >= 0 && exp <= 20) {
			return true;
		}
		return false;
	}

	public boolean CheckExpError() {
		try {
			RelevantExpError.isDisplayed();
			return true;
		} catch (NoSuchElementException e) {
			return false;
		}
	}

	public void FileUpload() throws InterruptedException {
		File.click();
		Thread.sleep(10000);
	}

	public void SetCurSalary(String salary) {
		Salary.sendKeys(salary);
	}

	public void SetNoticePeriod() {
		NoticePeriod.click();
		Days15.click();
	}

	public void Submit() {
		Submit.click();
	}

	public boolean SuccessMesaage() {
		boolean res = SuccessMessage.isDisplayed();
		System.out.println("#####Submitted Form##### " + res);
		return res;
	}

}
