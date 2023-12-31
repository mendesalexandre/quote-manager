# [1.0.2]

#### Changed
- Pump project version from `1.0.1` to `1.0.2`
- Enhance the user dashboard (homepage) to get more useless information [#51](https://github.com/BIEMAX/quote-manager/issues/51)
- Change the process of registration 'new presell' from dialog to page
- Always open the menus as opened
- Reduced the notification badge time from '1,5' seconds to '0,7' seconds
- Not allow copy pre-sale page final url if is not present

#### Fix
- Fix tips not loading properly at home screen [#59](https://github.com/BIEMAX/quote-manager/issues/59)
- Fix duplicate success messages after close dialogs [#33](https://github.com/BIEMAX/quote-manager/issues/33)
- Fix warning when select the color for pre-sale pages 'Failed to resolve directive: value at <ColorPicker>'
- Fix shortcut to homepage not working properly [#57](https://github.com/BIEMAX/quote-manager/issues/57)
- Fix data not re-loading properly in tables after do some action [#60](https://github.com/BIEMAX/quote-manager/issues/60)
- Fix not re-loading the grid after pay an overdue bill
- Fix login card not centered at the screen size [#72](https://github.com/BIEMAX/quote-manager/issues/72)

#### Implement
- Get device information on user registration/login [#25](https://github.com/BIEMAX/quote-manager/issues/25)
- Defaulters screen, add and subtract debt and user tracking changes on the values [#35](https://github.com/BIEMAX/quote-manager/issues/35)
- Added vertical scrolls for mobile devices [#42](https://github.com/BIEMAX/quote-manager/issues/42)
- Re-branded the menus and icons [#98](https://github.com/BIEMAX/financial-manager-app/issues/98)
- In pre-sale registration, allow user define the headline [#61](https://github.com/BIEMAX/quote-manager/issues/61)
- In pre-sale creation, added button 'privacy' [#63](https://github.com/BIEMAX/quote-manager/issues/63)
- In pre-sale creation, added button 'terms' [#64](https://github.com/BIEMAX/quote-manager/issues/64)
- In pre-sale creation, added button 'contact' [#65](https://github.com/BIEMAX/quote-manager/issues/65)
- Enable fields based on template selection in pre-sale registration [#70](https://github.com/BIEMAX/quote-manager/issues/70)
- Implemented github actions for automatized deploys for Google Firebase
- In pre-sale page registration, validate if the affiliate url contains malicious content [#67](https://github.com/BIEMAX/quote-manager/issues/67)
- In pre-sale page registration, possibility to change button text [#66](https://github.com/BIEMAX/quote-manager/issues/66)
- In pre-sale page registration, not allow use the product link [#69](https://github.com/BIEMAX/quote-manager/issues/69)
- Added column 'bill type' at the bills grid
- Finish the menu 'pre-sales' implementing edition [#34](https://github.com/BIEMAX/quote-manager/issues/34)

# [1.0.1]

#### Changed
- Change the time notification from '5 milliseconds' to '1,5 milliseconds'
- Change 'user login' to 'user email' [#27](https://github.com/BIEMAX/quote-manager/issues/27)
- Change the the custom hint in 'required inputs' to accept a custom one
- Change the input from 'filled' to 'outlined' [#36](https://github.com/BIEMAX/quote-manager/issues/36)
- Change the selected sub menu to highlight [#37](https://github.com/BIEMAX/quote-manager/issues/37)
- Always start filter panel as opened based on device [#38](https://github.com/BIEMAX/quote-manager/issues/38)
- Removed duplicate translation in i18n config file [#41](https://github.com/BIEMAX/quote-manager/issues/41)
- Enhance the user home screen to get more useless information
- Refactor the user menu permissions based on API information provided
- Changed the pallet colors of the UI [#55](https://github.com/BIEMAX/quote-manager/issues/55)

#### Implement
- Implement sections for 'field to query' and 'buttons' on `Filter panel`
- Build dependency to generate executable for other operational systems [#23](https://github.com/BIEMAX/quote-manager/issues/23)
- Implement 'About section' to check database and backend services [#19](https://github.com/BIEMAX/quote-manager/issues/19)
- Implement 'User history' [#28](https://github.com/BIEMAX/quote-manager/issues/28)
- Implement 'User update info' page [#26](https://github.com/BIEMAX/quote-manager/issues/26)
- Implement menu for 'Google Ads and affiliates' [#24](https://github.com/BIEMAX/quote-manager/issues/24)
- Added function to remove bill from 'finances menu'
- Option to upload pre-sell images [#31](https://github.com/BIEMAX/quote-manager/issues/31)
- Implement function to delete defaulter [#48](https://github.com/BIEMAX/quote-manager/issues/48)
- Implement tags menu [#49](https://github.com/BIEMAX/quote-manager/issues/49)
- Implement new options to register new presell
- Implement design patterns over the buttons for better UX [#56](https://github.com/BIEMAX/quote-manager/issues/56)
- Implement cross platform builder apps through electron [#44](https://github.com/BIEMAX/quote-manager/issues/44)

#### Fix
- Fix `Filter Panel` component not showing properly the components added in template slot
- Fix the buttons in table row not triggering events when clicked [#21](https://github.com/BIEMAX/quote-manager/issues/21)
- Fix invalid date after login [#17](https://github.com/BIEMAX/quote-manager/issues/17)
- Fix 'keep me connected' not working [#22](https://github.com/BIEMAX/quote-manager/issues/22)
- Fix user permissions in submenu options not working properly [#29](https://github.com/BIEMAX/quote-manager/issues/29)
- Fix the menus always expanded after login [#32](https://github.com/BIEMAX/quote-manager/issues/32)
- Fix tables not updating after insert a new register [#43](https://github.com/BIEMAX/quote-manager/issues/43)
- Fix the query data after the dialogs close's [#39](https://github.com/BIEMAX/quote-manager/issues/39)
- Fix a bug that prevents a new bill be registered [#45](https://github.com/BIEMAX/quote-manager/issues/45)
- Fix bill list not updating after dialog close [#47](https://github.com/BIEMAX/quote-manager/issues/47)
- Fix message 'detected HTML in '<Selecione>' message. Recommend not using HTML messages to avoid XSS.' [#54](https://github.com/BIEMAX/quote-manager/issues/54)

# [1.0.0]

#### Changed
- Added import to mdi-v6 icons
- Add new sub routes for finances [#8](https://github.com/BIEMAX/quote-manager/issues/8)
- Added search in table data [#9](https://github.com/BIEMAX/quote-manager/issues/9)
- Create a default structure for i18n messages [#4](https://github.com/BIEMAX/quote-manager/issues/4)
- Update quasar version '2.6.0' to '2.11.9' [15](https://github.com/BIEMAX/quote-manager/issues/15)
- Added component to use as 'help button'

#### Fix
- Fix loop when logout [#3](https://github.com/BIEMAX/quote-manager/issues/3)
- Fix menu 'Task todo' not accessible [#7](https://github.com/BIEMAX/quote-manager/issues/7)
- Fix the view of month bills disappear after click on search button [14](https://github.com/BIEMAX/quote-manager/issues/14)
- Fixed the month selector not receiving the data selected by user
- Fixed the user name not show properly in settings
- Fix the buttons in grid view not showing properly [#20](https://github.com/BIEMAX/quote-manager/issues/20)

#### Implement
- Implement cookies for login [#1](https://github.com/BIEMAX/quote-manager/issues/1)
- Implement navigation guard [#2](https://github.com/BIEMAX/quote-manager/issues/2)
- Implement i18n with support to english and portuguese [#2](https://github.com/BIEMAX/financial-manager-app/issues/2)
- Implement button to edit rows in tables [#10](https://github.com/BIEMAX/quote-manager/issues/10)
- Implement button to delete rows in tables [#11](https://github.com/BIEMAX/quote-manager/issues/11)
- Implement button to custom actions in tables rows [#12](https://github.com/BIEMAX/quote-manager/issues/12)
