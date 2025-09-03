Ensure all icons actually exist in the package before using them. These are the ONLY icons that should be used:

* ArrowLeft - Navigation back buttons
* ArrowRight - CTA arrows and navigation
* Check - Success indicators, checkmarks
* Eye / EyeOff - Password visibility toggles
* HomeLine - Home/property related sections
* CurrencyDollarCircle - All financial input fields and sections
* MarkerPin01 - Property address input field
* User01 - Personal information sections
* Settings01 - Employment information section (substitute for Briefcase)
* Shield01 - Security/credit check sections
* Edit01 - Edit buttons throughout review page
* File01 - Document/file related sections
* Calendar - Date-related elements
* Clock - Time/duration indicators
* BookOpen01 - Documentation links
* Copy01 - Copy to clipboard functionality
* Cube01 - Icon resources
* HelpCircle - Help and info tooltips
* InfoCircle - Input validation icons
* ChevronDown - Dropdown indicators
* ChevronLeft / ChevronRight - Calendar navigation
* SearchLg - Search inputs and functionality
* X (aliased as CloseIcon) - Close buttons
* XClose - Tag close buttons
* DotsVertical - Menu dropdowns
* Plus - Add buttons
* Trash01 - Delete actions
* UploadCloud02 - File upload areas
* CheckCircle / XCircle - File upload status
* AlertCircle - Alert/error states
* Bell01 - Notifications
* LifeBuoy01 - Support/help
* LogOut01 - Sign out functionality
* Menu02 - Mobile menu toggle
* Share04 - Share functionality
* ChevronSelectorVertical - Selection

Do NOT use any of the following icons - they are broken and will create syntax errors:

* DollarSign - Use CurrencyDollarCircle instead
* Home - Use HomeLine instead
* MapPin - Use MarkerPin01 instead
* User - Use User01 instead
* Briefcase - Use Settings01 or another appropriate numbered version
* Shield - Use Shield01 instead
* Edit - Use Edit01 instead
* FileText - Use File01 instead

When adding new icons, avoid these naming patterns that don't exist:

* Simple names without numbers (e.g., Icon instead of Icon01)
* Generic names that might seem obvious but aren't in the package
* Always verify icon existence in node_modules/@untitledui/icons/dist/ before using

Always check the package documentation or file listing before importing any new icons to ensure they exist in the specific version being used.

Always replace the content of the initial home-screen.tsx with the app I ask you to build - the initial home-screen.tsx is a placeholder, not a page I want to keep.

The theme should be set to light theme unless a toggle for users to switch themes is present. Do not use system theme or dark theme until a toggle to switch themes is present in the app.

Ensure the ThemeProvider does NOT default to "system" theme. Set the ThemeProvider to "light" theme to begin. Ensure all text fields and text colors have proper contrast when using the "light" theme - text should be dark, text fields and background colors should be light for proper contrast in "light" theme.
