# ipo-web-app
# IPO Web Application – Bluestock Fintech

This is a full-stack IPO web application for managing and displaying IPO data, built as per project requirements.

## 🛠 Technologies Used
- **Backend:** Django 5 + Django REST Framework
- **Frontend:** HTML, CSS, JavaScript, Bootstrap 5
- **API:** Custom REST API for IPO data, companies, and documents
- **Authentication:** Simple LocalStorage-based admin login

## 📁 Features
- Admin dashboard to add:
  - Company information
  - IPO details (price, dates, gain, return, etc.)
  - RHP and DRHP PDF links
- Public IPO listing page with:
  - Company logos
  - Price bands, dates, gains, CMP
  - RHP/DRHP download buttons

## 🚀 How to Run the Project Locally

### Backend Setup (Django)
```bash
cd ipo-web-app
python -m venv venv
venv\Scripts\activate  # On Windows
pip install -r requirements.txt
python manage.py runserver
