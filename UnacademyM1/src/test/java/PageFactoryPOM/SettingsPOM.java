package PageFactoryPOM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SettingsPOM {
	WebDriver driver;
	/*********************** WEB ELEMENTS ***********************/
// Edit name :
	@FindBy(xpath = "//button[normalize-space()='Edit name']")
	WebElement EditName;

	@FindBy(xpath = "//input[@placeholder='Full name']")
	WebElement NameField;

	@FindBy(xpath = "//button[normalize-space()='Save']")
	WebElement SaveName;

// Edit username :
	@FindBy(xpath = "//button[normalize-space()='Edit username']")
	WebElement EditUsername;

	@FindBy(xpath = "//input[@placeholder='Username']")
	WebElement UsernameField;

	@FindBy(xpath = "//button[normalize-space()='Save']")
	WebElement SaveUsername;

	/*********** Edit e-mail ***********/

	@FindBy(css = "button[aria-label='Edit email']")
	WebElement editMail;

	@FindBy(xpath = "//input[@placeholder='Email']")
	WebElement emailField;

	@FindBy(xpath = "//button[normalize-space()='Continue']")
	WebElement emailContinue;

	@FindBy(xpath = "//input[@placeholder='OTP']")
	WebElement MailOTP;

	@FindBy(css = "button[aria-label='Verify OTP']")
	WebElement VerifyOTPMail;

	/*********** Edit mobile ***********/

	@FindBy(css = "button[aria-label='Edit number']")
	WebElement EditMobile;

	@FindBy(name = "mobile")
	WebElement MobileField;

	@FindBy(xpath = "//button[normalize-space()='Continue']")
	WebElement MobileContinue;

	@FindBy(css = "input[placeholder='OTP']")
	WebElement MobileOTP;

	@FindBy(xpath = "//button[normalize-space()='Verify OTP']")
	WebElement MobileVerifyOTP;

	@FindBy(xpath = "//h6[normalize-space()='Resend OTP']")
	WebElement MobileResendOTP;

	/*********** Edit state ***********/

	@FindBy(css = "button[aria-label='Edit state']")
	WebElement EditState;

	@FindBy(css = "button[aria-label='Save']")
	WebElement SaveState;

	/*********************** METHODS ***********************/
	public SettingsPOM(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void ChangeName(String str) {
		EditName.click();
		NameField.sendKeys(str);
		SaveName.click();
	}

	public void ChangeUserName(String str) {
		EditUsername.click();
		UsernameField.sendKeys(str);
		SaveUsername.click();
	}

	public void ChangeEmail(String str) {
		editMail.click();
		emailField.sendKeys(str);
		emailContinue.click();
		String OTP = null;
		MailOTP.sendKeys(OTP);
		VerifyOTPMail.click();
	}

	public void ChangeNumber(String str) {
		EditMobile.click();
		MobileField.sendKeys(str);
		MobileContinue.click();
		String OTP = null;
		MobileOTP.sendKeys(OTP);
		MobileVerifyOTP.click();
	}

	public void ChangeState(String str) {
		EditState.click();
		SaveState.click();
	}
}
