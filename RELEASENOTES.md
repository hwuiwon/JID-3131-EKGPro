# v0.5.0 (December 4, 2023)

## New Features
- Added ability to download EKGs
- Added functionality to make EKGs draggable
- Added comprehensive image conversion functionality

## Bug-fixes
- Fixed the sizing and layout of the notes on the patient page
- Refactored code on the patient page for better readability and reuse
- Changed how images are uploaded and organized in S3 to be more consistent and logical
- Fixed post requests from the front end using IDs, patient files are added to S3 with IDs
- Fixed previous grid background code from that was rendering incorrectly 

## Known Issues
- N/A

# v0.4.0 (November 13, 2023)

## New Features
- Added chart difference viewer
- Added key scrolling between active EKGs
- Added notes section to patient analysis page
- Added grid background for EKGs
- Created S3Service that handles all operations related to EKG upload/download
- Created new upload API endpoint
- Added EKG upload button
- Added error message modal if no image is uploaded

## Bug-fixes
- Removed segments button and schedule appointment button
- Refactored upload model to include fields

## Known Issues
- N/A

# v0.3.0 (October 23, 2023)

## New Features
- Backend was been refactored from Django to FastAPI
- Added appointment page, which contains a list of appointments, their status, and filtering options
- Added states to register and login screens
- Implemented password validation
- Improved readability and presentation of by adding place holder values

## Bug-fixes
- N/A

## Known Issues
- No backend integration for upload functionality
- Sign in authentication needs to meet AWS format
- EKG images are not populating in the analysis page

# v0.2.0 (October 2, 2023)

## New Features
- Sign-up / Sign-in Authentication
- Refactored design and components

## Bug-fixes
- N/A

## Known Issues
- No backend integration for upload functionality

# v0.1.0 (September 11, 2023)

## New Features
- Sign-up / Sign-in Pages
- Dashboard
- Patient Information Page
- EKG Upload Functionality (Frontend)
- Refactored design and components

## Bug-fixes
- N/A

## Known Issues
- No sign/auth functionality
- No backend integration for upload functionality
