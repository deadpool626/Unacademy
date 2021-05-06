package PageFactoryPOM;

import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CareerPOM {
	WebDriver driver;
	@FindBy(xpath = "//input[@placeholder='Search jobs…']")
	WebElement SearchInput;

	@FindBy(xpath = "//input[@id='locations-filter_input']")
	WebElement Location;

	@FindBy(css = "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > dialog:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1)")
	WebElement LocationIndia;

	@FindBy(xpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[2]/ul[1]/li[1]/div[1]/div[1]/p[1]/span[2]")
	WebElement SelectedLocation;

	@FindBy(xpath = "//input[contains(@value,'Department')]")
	WebElement Department;

	@FindBy(xpath = "//input[@placeholder='Search']")
	WebElement DeptSearch;

	@FindBy(xpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[2]/ul[1]/li[1]/div[1]/div[1]/p[1]/span[1]")
	WebElement SelectedDept;

	@FindBy(xpath = "//input[@value='Work type ']")
	WebElement WorkType;

	@FindBy(xpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[3]/div[1]/dialog[1]/div[1]/div[1]/ul[1]/li[1]/div[1]/div[1]/span[1]")
	WebElement SelectWorkType;

	@FindBy(xpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[2]/ul[1]/li[1]/div[1]/div[1]/p[1]/span[3]")
	WebElement DisplayedWorkType;

	@FindBy(xpath = "//a[normalize-space()='Clear filters']")
	WebElement ClearF;

	@FindBy(xpath = "//input[@placeholder='Search jobs…']")
	WebElement SearchJobs;

	@FindBy(xpath = "/html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[2]/ul[1]/li[1]/div[1]/h3[1]")
	WebElement JobTitle;

	@FindBy(xpath = "//h2[normalize-space()='Sorry, no jobs found matching this criteria.']")
	WebElement SearchErrorMessage;

	public CareerPOM(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void setLocation() throws InterruptedException {
		Thread.sleep(2000);
		Location.click();
		LocationIndia.click();

	}

	public boolean checkLocation() {
		String str = SelectedLocation.getText();
		String str2 = LocationIndia.getText();
		if (str.contains(str2)) {
			System.out.println("*****Location is same as selected*****");
			return true;
		} else {
			System.out.println("*****Location is different than selected*****");
			return false;
		}

	}

	public void setDepartment(String dept) throws InterruptedException {
		Thread.sleep(2000);
		Department.click();
		DeptSearch.sendKeys(dept);
		DeptSearch.sendKeys(Keys.ENTER);
	}

	public boolean checkDepartment(String dept, boolean b) throws InterruptedException {
		String str = SelectedDept.getText();

		if (str.contains(dept)) {
			System.out.println("*****Department is same as selected*****");
			if (b == true) {
				Thread.sleep(3000);
				// Department.click();
				ClearF.click();
			}
			return true;
		} else {
			System.out.println("*****Department is different than selected*****");
			if (b == true) {
				Thread.sleep(3000);
				// Department.click();
				ClearF.click();
			}
			return false;
		}
	}

	public void setWorkType() throws InterruptedException {
		Thread.sleep(3000);
		WorkType.click();
		SelectWorkType.click();
	}

	public boolean checkWorkType() {
		String str = SelectWorkType.getText();
		String str2 = DisplayedWorkType.getText();
		if (str.contains(str2)) {
			System.out.println("*****Work Type is same as selected*****");
			return true;
		} else {
			System.out.println("*****Work Type is different than selected*****");
			return false;
		}
	}

	public void ClickClear() {
		ClearF.click();
		System.out.println("*****ClickClear()*****");
	}

	public boolean CheckClear() {
		boolean present;
		try {
			ClearF.isDisplayed();
			present = true;
		} catch (NoSuchElementException e) {
			present = false;
		}

		System.out.println("*****Clear Filters : " + present + "*****");
		return present;
	}

	public void SearchTitle(String title) {
		SearchJobs.sendKeys(title);
		SearchJobs.sendKeys(Keys.ENTER);
		System.out.println("*****Title Entered*****");
	}

	public String ValidateTitle() {
		String title = JobTitle.getText();
		System.out.println("*****Returning Actual Title*****");
		return title;
	}

	public boolean ErrorMessage() {
		System.out.println("*****Error Message????? " + SearchErrorMessage.isDisplayed());
		return SearchErrorMessage.isDisplayed();
	}
}
