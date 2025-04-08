# BUNZ Sandwich Shop Website

This is a website for BUNZ, a sandwich shop located in Kigali, Rwanda. The website is built using Next.js and Tailwind CSS.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Home page with hero section, featured items, and location information
- Menu page showing sandwich offerings
- Location page with detailed address and directions
- Contact page with a contact form
- About page with information about the business

## Getting Started

### Prerequisites

- Node.js (version 14.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bunz-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the application for production, run:

```bash
npm run build
# or
yarn build
```

Then, you can start the production server:

```bash
npm run start
# or
yarn start
```

## Technology Stack

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For utility-first styling
- **React Icons**: For common icons

## Project Structure

- `src/app`: Contains the Next.js app router pages
- `src/components`: Reusable components used throughout the application
- `src/styles`: Global styles and Tailwind configuration
- `public`: Static files like images

## Customization

### Changing Content

- Update the menu items in the `src/app/menu/page.tsx` file
- Modify contact information in the `src/components/Footer.tsx` and other relevant files
- Update business hours and location details as needed

### Adding Images

Place your images in the `public/images` directory and reference them in your components:

```jsx
<img src="/images/your-image.jpg" alt="Description" />
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or support, please contact:

- Email: info@bunzrwanda.com
- Instagram: [@bunz.rw](https://www.instagram.com/bunz.rw/?hl=en) 