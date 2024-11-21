# Resume Builder

## Project Overview
This project is a web application named **Resume Builder** that allows users to create and preview professional resumes in real-time. It offers a user-friendly interface with complete customization options.

---

## Features
- **Real-Time Preview**: See how your resume appears as you edit it.
- **Customizable Sections**: Add, edit, or hide sections like Work History, Education, Skills, and more.
- **PDF Export**: Download a clean and formatted PDF version of your resume.
- **Accessibility**: Supports keyboard navigation and screen readers.

---

## AI used 
- **chatGpt**: https://drive.google.com/file/d/1EalN6twIMVKQL3UY_31mqu4jfRApMJ1a/view

## Getting Started

### Installation
1. Clone the project repository:
   ```bash
   git clone https://github.com/i3laddin/resume-builder.git
   cd resume-builder
   npm install
   npm start
Open your browser at http://localhost:3000 to access the app.



  
  ## Libraries Used

- **React**: Core framework for building the user interface.
- **TypeScript**: Enables type safety and improves developer experience.
- **Tailwind CSS**: Provides utilities for creating a responsive and modern design.
- **React-to-Print**: Facilitates converting the resume preview to a downloadable PDF.
- **Lucide React**: Offers clean and lightweight SVG icons.
- **Shadcn UI**: Ensures consistent and accessible UI components.

---

# How It Works

## Edit Details
Use the provided form to update your resume details such as name, title, skills, and work history.

## Customize Visibility
Toggle the visibility of each section to personalize the resume content.

## Live Preview
View a real-time preview of your updated resume in the dedicated preview panel.

## Generate PDF
With a single click, generate and download a professionally formatted PDF of your resume.

---

# Useful Tips

## Customization

### Manage Resume Data
Use `ResumeContext` to easily update and manage the resume's data.

### Control Section Visibility
Utilize `ResumeVisibilityContext` to toggle the visibility of individual sections as needed.



## Folder Structure

```bash 
src/
  ├── components/         # Contains reusable UI components
      ├── Form/           # Components for editing resume details
      ├── Preview/        # Components for the live preview of the resume
      ├── Shared/         # Shared components used across features
      ├── ui/             # Core UI elements and styled components
  ├── context/            # Context providers for state management
  ├── lib/                # Utility functions and libraries
  ├── hooks/              # Custom React hooks
  ├── hoc/                # Higher-order components for advanced logic
  ├── pages/              # Main application pages
  └── styles/             # Global and scoped styles
  
  
  
