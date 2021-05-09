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

	/******* Locators to locate WebElements *******/

	// Location of @Apply_for_this_job button
	@FindBy(xpath = "//a[normalize-space()='Apply for this job']")
	WebElement ApplyButton;

	// Location of @First_Name text box
	@FindBy(id = "firstname")
	WebElement FirstName;

	// Location of @First_Name_Error message
	@FindBy(id = "firstname_error")
	WebElement FirstNameError;

	// Location of @Last_Name text box
	@FindBy(id = "lastname")
	WebElement LastName;

	// Location of @Last_Name_Error message
	@FindBy(id = "lastname_error")
	WebElement LastNameError;
	// Location of @Email text box
	@FindBy(name = "email")
	WebElement Email;

	// Location of @Phone_Number text box
	@FindBy(xpath = "//input[@name='phone']")
	WebElement Phone;

	// Location of invalid Phone_Number error message
	@FindBy(css = "#phone_error")
	WebElement PhoneMessage;

	// Location of @Location text box
	@FindBy(css = "#CA_5516")
	WebElement Location;

	// Location of invalid Location error message
	@FindBy(css = "#CA_5516_error")
	WebElement LocationError;

	// Location of @Experience field
	@FindBy(xpath = "//input[@id='input_CA_5511_input']")
	WebElement Experience;

	// Location of @Fresher choice
	@FindBy(xpath = "//li[@value='57022']//div[@role='presentation']")
	WebElement Fresher;

	// Location of @RelevantExperience text box
	@FindBy(xpath = "//input[@name='CA_5512']")
	WebElement RelevantExperience;

	// Location of invalid RelevantExperience error message
	@FindBy(css = "#CA_5512_error")
	WebElement RelevantExpError;

	// Location of select file button to update resume
	@FindBy(xpath = "//span[@role='button']")
	WebElement File;

	// Location of @Salary text box
	@FindBy(css = "input[name='CA_5513']")
	WebElement Salary;

	// Location of @NoticePeriod field
	@FindBy(xpath = "//input[@id='input_CA_5515_input']")
	WebElement NoticePeriod;

	// Location of @Days15 choice
	@FindBy(xpath = "//li[@value='57030']//div[@role='presentation']")
	WebElement Days15;

	// Location of Submit button to submit the application
	@FindBy(xpath = "//button[normalize-space()='Submit application']")
	WebElement Submit;

	// Location of successful submission of application
	@FindBy(xpath = "//h3[normalize-space()='Your application has been submitted successfully.']")
	WebElement SuccessMessage;

	/******* Methods to perform actions *******/

	// Constructor for initializing Page_Facotry
	public ApplicationPageFactory(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	// ApplyNow() method to click on @Apply_for_this_job button
	public void ApplyNow() {
		ApplyButton.click();
	}

	/*
	 * SetFNLNEmail(String FN, String LN, String email) method will enter First
	 * Name, Last Name and email
	 */
	public void SetFNLNEmail(String FN, String LN, String email) {
		FirstName.sendKeys(FN);
		LastName.sendKeys(LN);
		Email.sendKeys(email);
	}

	public boolean ValidateName(String FN, String LN) {
		boolean FNb = false, LNb = false;
		if (FN.length() <= 20) {
			Pattern p = Pattern.compile("^[a-zA-Z\\s]*$");
			Matcher m = p.matcher(FN);
			FNb = m.matches();
			System.out.println("FirstName Less than 21 and matcher : " + FNb);
		} else {
			System.out.println("FirstName characters more than 21 " + FN);
		}

		if (LN.length() <= 20) {
			Pattern p = Pattern.compile("^[a-zA-Z\\s]*$");
			Matcher m = p.matcher(LN);
			LNb = m.matches();
			System.out.println("LastName Less than 21 and matcher : " + LNb);
		} else {
			System.out.println("LastName characters more than 21 " + LN);
		}

		if (FNb == true && LNb == true)
			return true;
		else
			return false;
	}

	public boolean ValidateNameError() {
		boolean fError;
		try {
			FirstNameError.isDisplayed();
			fError = true;
		} catch (NoSuchElementException e) {
			fError = false;
		}

		boolean lError;
		try {
			LastNameError.isDisplayed();
			lError = true;
		} catch (NoSuchElementException e) {
			lError = false;
		}

		if (fError == true && lError == true)
			return true;
		else
			return false;
	}

	// SetPhoneNumber(String no) will enter phone number
	public void SetPhoneNumber(String no) {
		Phone.sendKeys(no);
	}

	/*
	 * ValidatePhone(String number) method validates if valid phone number is
	 * entered This method accepts phone number starting with 7,8,9 with length of
	 * 10 characters
	 */
	/*
	 * Returns TRUE if it matches the conditions
	 * 
	 * Returns FALSE if it does not matches the conditions
	 */

	public boolean ValidatePhone(String number) {
		Pattern p = Pattern.compile("^[7-9][0-9]{9}$");// Regular expression to validate phone no.
		Matcher m = p.matcher(number);
		boolean b = m.matches();
		return b;
	}

	/*
	 * CheckPhoneError() will verify if error message is displayed when invalid
	 * phone number is entered
	 * 
	 * @Returns TRUE if error message is displayed
	 * 
	 * @Returns FALSE if error message is not displayed
	 */
	public boolean CheckPhoneError() {
		try {
			PhoneMessage.isDisplayed();
			return true;
		} catch (NoSuchElementException e) {
			return false;
		}
	}

	// SetLocation(String loc) method enters the location
	public void SetLocation(String loc) {
		Location.sendKeys(loc);
	}

	/*
	 * ValidateLocation(String loc) method validates if valid location is entered
	 * This method accepts location starting with any character, no special
	 * characters or digits with max length of 20 characters
	 */
	/*
	 * Returns TRUE if it matches the conditions
	 * 
	 * Returns FALSE if it does not matches the conditions
	 */
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

	/*
	 * CheckLocError() will verify if error message is displayed when invalid
	 * location is entered
	 * 
	 * @Returns TRUE if error message is displayed
	 * 
	 * @Returns FALSE if error message is not displayed
	 */
	public boolean CheckLocError() {
		try {
			LocationError.isDisplayed();
			return true;
		} catch (NoSuchElementException e) {
			return false;
		}
	}

	// SetExperience() method enters the Experience
	public void SetExperience() {
		Experience.click();
		Fresher.click();
	}

	// SetRelExperience(String years) method enters the Relevant Experience
	public void SetRelExperience(String years) {
		RelevantExperience.sendKeys(years);
	}

	/*
	 * ValidateRelExperience(String exp1) method validates if valid Relevant
	 * Experience is entered This method accepts Relevant Experience between
	 * 0(fresher) and 20
	 */
	/*
	 * Returns TRUE if it matches the range
	 * 
	 * Returns FALSE if it does not matches the range
	 */

	public boolean ValidateRelExperience(String exp1) {
		// exp1 = exp1.replaceAll("\\s", "");
		int exp = Integer.valueOf(exp1.trim());// String is converted to int for comparison
		System.out.println("+++++ Relevant Experience +++++" + exp1);
		if (exp >= 0 && exp <= 20) {
			return true;
		}
		return false;
	}

	/*
	 * CheckExpError() will verify if error message is displayed when invalid
	 * Relevant Experience is entered
	 * 
	 * @Returns TRUE if error message is displayed
	 * 
	 * @Returns FALSE if error message is not displayed
	 */
	public boolean CheckExpError() {
		try {
			RelevantExpError.isDisplayed();
			return true;
		} catch (NoSuchElementException e) {
			return false;
		}
	}

	// FileUpload() clicks on upload file link to upload resume
	public void FileUpload() throws InterruptedException {
		File.click();
		Thread.sleep(10000);// time given to user for uploading resume
	}

	// SetCurSalary(String salary) method enters the current salary
	public void SetCurSalary(String salary) {
		Salary.sendKeys(salary);
	}

	// SetNoticePeriod() method selects a notice period
	public void SetNoticePeriod() {
		NoticePeriod.click();
		Days15.click(); // selects 15 days of notice period
	}

	// Submit() method clicks on submit application button
	public void Submit() {
		Submit.click();
	}

	/*
	 * SuccessMesaage() will verify if successful submission message is displayed
	 * when submit button is clicked
	 * 
	 * @Returns TRUE if success message is displayed
	 * 
	 * @Returns FALSE if success message is not displayed
	 */
	public boolean SuccessMesaage() throws InterruptedException {
		Thread.sleep(5000);
		boolean res = SuccessMessage.isDisplayed();
		System.out.println("#####Submitted Form##### " + res);
		return res;
	}

}
