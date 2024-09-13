# Top Podcasts Itunes
Welcome to the Top Podcasts Itunes application repository! This application allows you to browse and view details about various podcasts, leveraging Next.js 14, Tailwind CSS, CSS Modules, and more

<p align="left"> <img src="https://komarev.com/ghpvc/?username=anyibio&label=Profile%20views&color=0e75b6&style=flat" alt="anyibio" /> </p>

<h3 align="left">Languages and Tools:</h3>
<div align="center">
	<code><img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704" alt="Next.js" title="Next.js"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/></code>
</div>

## Documentation and Architecture
📝 You can find out more about this project here [https://silver-desert-6c9.notion.site/Crypto-currency-exchange-f44e9f5cfbf34d97a978b247bd359c46](https://silver-desert-6c9.notion.site/Crypto-currency-exchange-f44e9f5cfbf34d97a978b247bd359c46)

/
├── public/                  # Static files accessible publicly
│   ├── images/              # Static images
│   └── ...                  # Other static files like favicon, robots.txt
├── app/                     # Main application using Next.js
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx       # Example button component
│   │   ├── Header.tsx       # Example header component
│   │   └── ...              # Other UI components
│   ├── pages/               # Application pages
│   │   ├── index.tsx        # Home page
│   │   ├── about.tsx        # About page
│   │   └── ...              # Other application pages
│   ├── service/             # Application services, like fetching data from localStorage
│   │   ├── podcastService.ts# Service for managing podcast data
│   │   └── ...              # Other related services
├── src/                     # Source code of the application, structured according to hexagonal architecture
│   ├── domain/              # Domain logic
│   │   ├── entities/        # Domain entities
│   │   │   ├── Podcast.ts   # Podcast entity
│   │   │   └── ...          # Other domain entities
│   │   ├── valueObjects/    # Domain value objects
│   │   │   └── ...          # Related value objects
│   │   └── repositories/    # Interfaces for repositories
│   │       └── PodcastRepository.ts # Interface for the podcast repository
│   ├── application/         # Application logic
│   │   ├── useCases/        # Use cases of the application
│   │   │   ├── GetPodcastDetails.ts # Use case for getting podcast details
│   │   │   └── ...          # Other use cases
│   │   └── services/        # Application-specific services
│   │       └── ...          # Other related services
│   ├── infrastructure/      # Infrastructure implementations
│   │   ├── dataSources/     # Data sources and repository implementations
│   │   │   └── PodcastRepositoryImpl.ts # Implementation of the podcast repository
│   │   └── ...              # Other infrastructure components
│   └── constants/           # Application constants
│       ├── appConstants.ts  # Global constants for the application
│       └── ...              # Other related constants

### Folder Structure Explained:
* public/: Contains static files served directly to the browser, such as images and other files that do not require processing.

* app/: Next.js application structure, including:

    - ui/: Reusable UI components.
    - pages/: Application pages, each corresponding to a route in the application.
    - service/: Services handling application logic, such as fetching data from localStorage.
* src/: Contains the source code organized according to hexagonal architecture:

    - domain/: Contains domain logic, including entities, value objects, and repositories.
    - application/: Application use cases and services.
    - infrastructure/: Infrastructure implementations, such as data sources and concrete - repository implementations.
* constants/: Global constants used across the application.

  
## Prerequisites
Before you begin, make sure you have the following prerequisites installed on your system:


* Node.js (v20.12.0 or higher)
* pnpm (v9.10.0 or higher)

## Installation
To run the Top Podcasts Itunes application locally, follow these steps:

1. Clone the repository to your local machine:
   ```git clone https://github.com/AnyiBio/app-podcasts.git```
2. Navigate to the project directory:
   ```cd app-podcasts```
3. Install the project dependencies:
   ```pnpm install```
## Usage
To start the development server and run the application locally, use the following command

```pnpm dev```

This command will run the application in development mode, and you can access it in your web browser at http://localhost:3000. The application will automatically reload if you make changes to the source code.

## Building for Production
To build the application for production, use the following command:

```pnpm build```

This will generate optimized production-ready files in the dist directory.

## Contributing
If you would like to contribute to this project, please open an issue or create a pull request. We welcome contributions from the community.

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://www.linkedin.com/in/anyi-jaramillo-henao-biobio" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="https://www.linkedin.com/in/anyi-jaramillo-henao-biobio" height="30" width="40" /></a>
</p>
