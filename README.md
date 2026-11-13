# MyMoney UI Lab – Classic Journal

A standalone mobile-first prototype for a classic accounting journal interface.

## Overview

MyMoney UI Lab is an independent UI development project for designing and testing the MyMoney accounting application's interface.

The project focuses on a **Classic General Journal** layout with a modern Black & Emerald visual theme.

This project is developed separately from the main MyMoney application.

## Design Goals

- Classic General Journal layout.
- Black and Emerald Green theme.
- Mobile-first responsive design.
- Support desktop, tablet, and mobile screens.
- Clear separation between Debit and Credit entries.
- Support multiple accounting lines within one journal document.
- Display journal totals with balanced Debit and Credit amounts.
- Easy-to-read accounting information.

## Journal Structure

The journal follows a traditional accounting format:

| Date | Document No. | Account / Particulars | Debit | Credit |
|---|---|---|---:|---:|
| 14/11/2026 | JV-001 | Bank Account | 3,210.00 | - |
| | | Office Supplies Expense | - | 3,210.00 |
| | | Description: Purchase of office supplies | | |
| | | **Total** | **3,210.00** | **3,210.00** |

Each journal document can contain multiple accounting lines.

Debit and Credit must be displayed as separate accounting entries, not combined into a single transaction card.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Responsive Web Design

No framework or build process is required.

## Project Structure

```text
MyMoney-UI-Lab/
│
├── index.html
└── README.md
```

## Run Locally

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html`.
4. Start the project using Live Server.
5. Open the local URL in your browser.

## Test on Mobile Devices

To test the interface on a real smartphone:

1. Connect your computer and smartphone to the same Wi-Fi network.
2. Start Live Server in Visual Studio Code.
3. Find your computer's local IP address.
4. Open the following address in your smartphone browser:

```text
http://YOUR-COMPUTER-IP:5500/
```

Replace `YOUR-COMPUTER-IP` with your computer's actual local IP address.

If the page cannot be opened, check Windows Firewall and ensure Live Server is accessible from your local network.

## GitHub Pages Deployment

This project can be hosted using GitHub Pages.

1. Push the project files to GitHub.
2. Open the repository's **Settings**.
3. Select **Pages**.
4. Under Build and deployment, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save the settings.
7. Open the published GitHub Pages URL.

## Development Scope

This project is a UI prototype.

- Uses mock data for interface testing.
- Does not connect to the production MyMoney database.
- Does not modify production LocalStorage.
- Does not affect existing MyMoney accounting records.
- Backend integration and real accounting data connection are not included yet.

## Future Development

- Complete responsive journal interface.
- Journal entry creation and editing.
- Multiple Debit and Credit accounting lines.
- Automatic journal balancing.
- Integration with the MyMoney accounting engine.
- Mobile usability improvements.

---

**Project:** MyMoney UI Lab  
**Module:** Classic General Journal  
**Theme:** Black & Emerald Green  
**Status:** UI Prototype Development