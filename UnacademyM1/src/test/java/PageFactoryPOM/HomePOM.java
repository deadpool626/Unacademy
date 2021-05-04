package PageFactoryPOM;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePOM {

	WebDriver driver;

	@FindBy(css = "img[class='Avatar__StyledAvatar-sc-1pabonf-0 hfGBuT HeaderUser__UserAvatar-zjqo1z-8 eyuwbo']")
	WebElement profileImg;

	@FindBy(xpath = "//p[normalize-space()='Settings']")
	WebElement settingsLink;

	public HomePOM(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void GotoSettings() {
		profileImg.click();
		settingsLink.click();
	}
}
