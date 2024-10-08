import {
	CircleStackIcon,
	CloudIcon,
	CodeBracketIcon,
	CommandLineIcon,
	ServerIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

import fastifyDarkLogo from "@/assets/skills/back-end/fastify-dark.png";
import fastifyLogo from "@/assets/skills/back-end/fastify.png";
import goLogo from "@/assets/skills/back-end/go.png";
import graphqlLogo from "@/assets/skills/back-end/graphql.png";
import javaLogo from "@/assets/skills/back-end/java.png";
import nextDarkLogo from "@/assets/skills/back-end/next-js-dark.png";
import nextjsLogo from "@/assets/skills/back-end/next-js.png";
import nodeLogo from "@/assets/skills/back-end/node.png";
import springLogo from "@/assets/skills/back-end/spring.png";
import tomcatLogo from "@/assets/skills/back-end/tomcat.png";
import auth0Logo from "@/assets/skills/cloud/auth0.png";
import awsLogo from "@/assets/skills/cloud/aws.png";
import azureLogo from "@/assets/skills/cloud/azure.png";
import stripeLogo from "@/assets/skills/cloud/stripe.png";
import postgresqlLogo from "@/assets/skills/database/postgresql.png";
import redisLogo from "@/assets/skills/database/redis.png";
import sqlServerLogo from "@/assets/skills/database/sql-server.png";
import bashLogo from "@/assets/skills/dev-ops/bash.png";
import dockerLogo from "@/assets/skills/dev-ops/docker.png";
import eslintLogo from "@/assets/skills/dev-ops/eslint.png";
import gitLogo from "@/assets/skills/dev-ops/git.png";
import linuxLogo from "@/assets/skills/dev-ops/linux.png";
import octopusDeployLogo from "@/assets/skills/dev-ops/octopus-deploy.png";
import powershellLogo from "@/assets/skills/dev-ops/powershell.png";
import prettierLogo from "@/assets/skills/dev-ops/prettier.png";
import stylelintLogo from "@/assets/skills/dev-ops/stylelint.png";
import svnLogo from "@/assets/skills/dev-ops/svn.png";
import viteLogo from "@/assets/skills/dev-ops/vite.png";
import windowsLogo from "@/assets/skills/dev-ops/windows.png";
import css3Logo from "@/assets/skills/front-end/css3.png";
import html5Logo from "@/assets/skills/front-end/html5.png";
import javascriptLogo from "@/assets/skills/front-end/javascript.png";
import reactLogo from "@/assets/skills/front-end/react.png";
import reduxLogo from "@/assets/skills/front-end/redux.png";
import tailwindLogo from "@/assets/skills/front-end/tailwind.png";
import typescriptLogo from "@/assets/skills/front-end/typescript.png";
import vueLogo from "@/assets/skills/front-end/vue.png";
import webWorkerDarkLogo from "@/assets/skills/front-end/web-worker-dark.png";
import webWorkerLogo from "@/assets/skills/front-end/web-worker.png";
import workboxLogo from "@/assets/skills/front-end/workbox.png";
import { removeNewLines } from "@/helpers";

import { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
	{
		code: "frontend",
		label: "Front End",
		description: "Browser technologies and tools",
		image: className => <CodeBracketIcon className={className} />,
		skills: [
			{
				code: "html",
				label: "HTML5",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="HTML5 logo"
						src={html5Logo}
					/>
				),
				level: 5,
				dateStarted: new Date(2015, 0, 1),
				description: removeNewLines`
					I am very experienced in writing HTML and
					knowledgeable in all areas of the markup and how to use it to create any UI or layout.
					I use semantic elements and always follow HTML best practices.
					Accessibility is always on my mind and I always use the correct attributes and tags to make my websites accessible.
					I always follow SEO best practices and use the correct meta tags and attributes.
			`,
			},
			{
				code: "css",
				label: "CSS3",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="CSS3 logo"
						src={css3Logo}
					/>
				),
				level: 5,
				dateStarted: new Date(2015, 0, 1),
				description: removeNewLines`
					I am highly experienced and knowledgeable in writing CSS.
					I stay up to date with the latest CSS features and syntax, seek
					to follow best practices and write clean and maintainable CSS.
					I am familiar with using CSS preprocessors such as Sass and Less.
					I have used CSS modules and CSS-in-JS solutions such as Emotion and Styled Components.
					Currently I am using Tailwind CSS in most of my projects, mostly for it's amazing developer experience.
			`,
			},
			{
				code: "js",
				label: "JavaScript",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="JavaScript logo"
						src={javascriptLogo}
					/>
				),
				level: 5,
				dateStarted: new Date(2015, 0, 1),
				description: removeNewLines`
					I am highly experienced and very knowledgeable with JavaScript and all of it's concepts.
					This ranges from a deep understanding of how the language works & behaves in both the browser and server-side environments.
					I always make use of modern syntax and new features of the language and use strict linters to enforce this.
					I have extensive knowledge of the DOM and how to manipulate it and also how to use the browser APIs
					as well as a vast knowledge of the JavaScript ecosystem and how to use npm to manage dependencies and publish packages.
			`,
			},
			{
				code: "ts",
				label: "TypeScript",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="TypeScript logo"
						src={typescriptLogo}
					/>
				),
				level: 5,
				dateStarted: new Date(2020, 0, 1),
				description: removeNewLines`
					I use TypeScript in all of my projects where JavaScript is used or required.
					I always enable strict mode with all checking flags enabled to take full advantage of the added type safety.
					This helps me catch type errors in development before runtime! and is a crucial part of my development process.
					I am very familiar with creating types and using them throughout a codebase using many different techniques and patterns.
			`,
			},
			{
				code: "react",
				label: "React",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="React logo"
						src={reactLogo}
					/>
				),
				level: 5,
				dateStarted: new Date(2019, 0, 1),
				description: removeNewLines`
					I am very proficient with React and have used it in many projects.
					I have a deep understanding of how React works and different rendering methods.
					My knowledge ranges from single-page applications, static sites, to server-side rendered applications.
					The vast majority of projects I have worked on have used React with TypeScript.
					When writing React components I aim to make them functional, re-usable, and composable components wherever possible.
					I strictly use hooks and follow the current standard React conventions.
			`,
			},
			{
				code: "redux",
				label: "Redux",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Redux logo"
						src={reduxLogo}
					/>
				),
				level: 4,
				dateStarted: new Date(2021, 0, 1),
				description: removeNewLines`
					Have used Redux in many projects to manage client state.
					I am familiar with the core concepts of Redux and how to use it in a React application.
					I have also used Redux with TypeScript and mostly use Redux Toolkit nowdays.
			`,
			},
			{
				code: "work-box",
				label: "WorkBox",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="WorkBox logo"
						src={workboxLogo}
					/>
				),
				level: 3,
				dateStarted: new Date(2021, 0, 1),
				description: removeNewLines`
					I have used WorkBox to create service workers for a few projects.
					I am familiar with the core concepts of WorkBox and how to use it to create a service worker that will power a single
					page application in offline mode and cache static assets.
			`,
			},
			{
				code: "vue",
				label: "Vue",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Vue logo"
						src={vueLogo}
					/>
				),
				level: 3,
				dateStarted: new Date(2022, 0, 1),
				description: removeNewLines`
					I have used Vue in a single project at work
					and have sound knowledge of the core concepts of Vue and how to use it to create a single page application.
			`,
			},
			{
				code: "tailwind-css",
				label: "Tailwind CSS",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Tailwind CSS logo"
						src={tailwindLogo}
					/>
				),
				dateStarted: new Date(2023, 0, 1),
				level: 4,
				description: removeNewLines`
					I have used Tailwind CSS in a few projects and am still learning all of it's capabilities.
					I am familiar with the core concepts of Tailwind CSS and how to use it to style a website.
					I have used it to style React applications and static sites.
			`,
			},
			{
				code: "web-worker",
				label: "Web Worker",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Web Worker logo"
						src={webWorkerLogo}
					/>
				),
				imageDark: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Web Worker logo"
						src={webWorkerDarkLogo}
					/>
				),
				level: 4,
				dateStarted: new Date(2024, 0, 1),
				description: removeNewLines`
					I have learnt how to use Web Workers to run JavaScript in a separate thread.
					This is to keep heavy computations in a separate thread to keep the main thread responsive.
					I used a web worker to read, and process a large file system in a project - the user would select a folder and it would
					recursively read all the files and folders and display the file structure in the browser while also scanning the metadata
					of each file. This was a great use case for a web worker as it kept the main thread responsive while the file system was being read.
			`,
			},
		],
	},
	{
		code: "backend",
		label: "Back End",
		description: "Server-side, systems, API's, frameworks",
		image: className => <ServerIcon className={className} />,
		skills: [
			{
				code: "node",
				label: "Node.js",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Node.js logo"
						src={nodeLogo}
					/>
				),
				level: 4,
				dateStarted: new Date(2018, 0, 1),
				description: removeNewLines`
					Have used Node.js in many of my personal projects to create RESTful APIs and GraphQL APIs,
					with usually either one of the frameworks Express.js, Fastify.js, or Apollo Server.
					I have a good understanding of the event loop and how to write non-blocking code.
					I am also familiar with Streams, Buffers, Promises, and the fetch API.
					I always stay up-to-date with the latest features of Node and use them in my projects.
			`,
			},
			{
				code: "express",
				label: "Fastify/Express",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="fastify logo"
						src={fastifyLogo}
					/>
				),
				imageDark: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Fastify logo"
						src={fastifyDarkLogo}
					/>
				),
				level: 4,
				dateStarted: new Date(2020, 0, 1),
				description: removeNewLines`
					Have used both Fastify and Express to create RESTful APIs and GraphQL APIs.
					I am very familiar with creating routes, middleware, and handling requests and responses in both.
					I have also used these frameworks to serve static files and render React applications.
			`,
			},
			{
				code: "next",
				label: "Next.js",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Next.js logo"
						src={nextjsLogo}
					/>
				),
				imageDark: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Next.js logo"
						src={nextDarkLogo}
					/>
				),
				level: 4,
				dateStarted: new Date(2022, 0, 1),
				description: removeNewLines`
					Solid understanding of Next.js and how to use it to create server-side rendered applications.
					Knowledge in App Router and React Server components pattern and how to use the to create the blend of static and dynamic pages
					and where to use each.
			`,
			},
			{
				code: "java",
				label: "Java",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Java logo"
						src={javaLogo}
					/>
				),
				level: 4,
				dateStarted: new Date(2022, 0, 1),
				description: removeNewLines`
					Strong knowledge of the Java language and it's core concepts. I always keep up to date with the latest features of the language.
					Have used Java to create RESTful, Servelt, and GraphQL APIs. I have also used server-side rendered applications with struts/JSP combination.
					I am familiar with using Java with Spring Boot and Java EE to create web applications.
					I have knowledge of the Java ecosystem and how to use Maven and Gradle to manage dependencies and build projects.
			`,
			},
			{
				code: "spring",
				label: "Spring",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Spring logo"
						src={springLogo}
					/>
				),
				level: 4,
				dateStarted: new Date(2022, 0, 1),
				description: removeNewLines`
					Am familiar with the core concepts of Spring and how to use it to create a variety of applications.
					Understanding of the difference between Spring Boot and Spring Framework and knowledge of dependency injection and inversion of control.
					Spring Boot is my preference for creating any Java applications.
			`,
			},
			{
				code: "tomcat",
				label: "Tomcat",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Tomcat logo"
						src={tomcatLogo}
					/>
				),
				level: 5,
				dateStarted: new Date(2022, 0, 1),
				description: removeNewLines`
					Strong knowledge of Tomcat and how to use it to deploy Java applications.
					Have used it to deploy Java EE applications and also Spring Boot applications.
					Knowledge of how to configure Tomcat and how to deploy applications to it and also how the servlet system works.
			`,
			},
			{
				code: "graphql",
				label: "GraphQL",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="GraphQL logo"
						src={graphqlLogo}
					/>
				),
				level: 4,
				dateStarted: new Date(2022, 0, 1),
				description: removeNewLines`
					Have used GraphQL in multiple projects to create APIs.
					I am very familiar with the core concepts of GraphQL and how to use it to create an API.
					I have used it with both Node.js and Java/Spring Boot.
			`,
			},
			{
				code: "go",
				label: "Go",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Go logo"
						src={goLogo}
					/>
				),
				level: 3,
				dateStarted: new Date(2024, 0, 1),
				description: removeNewLines`
					I have been learing Go for a few months now and have used it in a few small projects.
					I am familiar with the core concepts of Go and how to use it to create a RESTful API.
					Solid understanding of Go's concurrency model including goroutines, channels, wait groups, mutexes, and writing
					thread-safe code in Go.
			`,
			},
		],
	},
	{
		code: "cloud",
		label: "Cloud",
		description: "Cloud platforms, services, and related tools",
		image: className => <CloudIcon className={className} />,
		skills: [
			{
				code: "aws",
				label: "AWS",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="AWS logo"
						src={awsLogo}
					/>
				),
				level: 3,
				dateStarted: new Date(2020, 0, 1),
				description: removeNewLines`
					I have used AWS to create a few projects.
					I am familiar with the core concepts of AWS and how to use it to launch and manage servers.
					Services I have used include EC2, RDS, S3, Lambda, CloudFront, Route 53, Virtual Private Cloud, and IAM.
					This is a skill I am actively working on improving. I just need to be exposed to more of the services and use them in projects.
			`,
			},
			{
				code: "azure",
				label: "Azure",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Azure logo"
						src={azureLogo}
					/>
				),
				level: 2,
				dateStarted: new Date(2023, 0, 1),
				description: removeNewLines`
					I have a brief understanding of Azure and how to use it to launch and manage servers. I have only used it at one job for basic maintenance tasks.
			`,
			},
			{
				code: "auth0",
				label: "Auth0/OAuth",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Auth0/OAuth logo"
						src={auth0Logo}
					/>
				),
				level: 4,
				dateStarted: new Date(2022, 0, 1),
				description: removeNewLines`
					I am a huge fan of Auth0 and have used it in many projects. I am familiar with the core concepts of Auth0 and how to use it to add authentication to a project.
					My knowledge goes beyond just Auth0 and I know how to use OAuth to add authentication to a project without Auth0.
					I also have knowledge of the different OAuth authentication flows. This includes an understanding of JWT's and how to use them to authenticate requests.
			`,
			},
			{
				code: "stripe",
				label: "Stripe",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Stripe logo"
						src={stripeLogo}
					/>
				),
				level: 3,
				dateStarted: new Date(2022, 0, 1),
				description: removeNewLines`
					I used Stripe in a single project to handle payments. I am familiar with the core concepts of Stripe and how to use it to handle payments
					and manage everything related to payments.
			`,
			},
			{
				code: "octopus-deploy",
				label: "Octopus Deploy",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Octopus Deploy logo"
						src={octopusDeployLogo}
					/>
				),
				level: 5,
				dateStarted: new Date(2022, 0, 1),
				description: removeNewLines`
					Very experienced using Octopus Deploy and it's features and how to use it to deploy applications.
					Expert knowledge of how to configure Octopus Deploy and how to create projects and releases.
			`,
			},
		],
	},
	{
		code: "database",
		label: "Database",
		description: "Database technologies, tools, and systems",
		image: className => <CircleStackIcon className={className} />,
		skills: [
			{
				code: "postgres",
				label: "PostgreSQL",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="PostgreSQL logo"
						src={postgresqlLogo}
					/>
				),
				level: 5,
				dateStarted: new Date(2018, 0, 1),
				description: removeNewLines`
					PostgresSQL is the database I am most familiar with.
					I have used it in many projects and have a good understanding of how to use it.
					Familiar with using PostgreSQL with Node.js and Java/Spring Boot.
					SQL is my preference for creating databases and I am very familiar with the syntax and how to use it to create tables, views, stored procedures, functions, indexes, and triggers.
			`,
			},
			{
				code: "mssql",
				label: "SQL Server",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="SQL Server logo"
						src={sqlServerLogo}
					/>
				),
				level: 4,
				dateStarted: new Date(2022, 0, 1),
				description: removeNewLines`
					I have experience using Microsoft SQL Server with Java/Spring Boot.
					I am familiar with using it to create tables, views, stored procedures, functions, indexes, and triggers.
					Sound knowledge of specific SQL server features.
			`,
			},
			{
				code: "redis",
				label: "Redis",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Redis logo"
						src={redisLogo}
					/>
				),
				level: 3,
				dateStarted: new Date(2021, 0, 1),
				description: removeNewLines`
					I have used Redis in a few projects.
					I am familiar with the core concepts of Redis and how to use it to store data.
					Have used it to store session information, cache database layer data, and as a plain database.
			`,
			},
		],
	},
	{
		code: "devops",
		label: "Dev Ops & Tools",
		description: "Development operations, tools, and systems",
		image: className => <CommandLineIcon className={className} />,
		skills: [
			{
				code: "docker",
				label: "Docker",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Docker logo"
						src={dockerLogo}
					/>
				),
				level: 3,
				dateStarted: new Date(2020, 0, 1),
				description: removeNewLines`
					I have used Docker to containerize a few projects.
					I am familiar with the core concepts of Docker and how to use it to create and manage containers.
					I have used Docker Compose to create multi-container applications.
			`,
			},
			{
				code: "eslint",
				label: "ESLint",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="ESLint logo"
						src={eslintLogo}
					/>
				),
				level: 5,
				dateStarted: new Date(2019, 0, 1),
				description: removeNewLines`
					I use ESLint in all of my projects where JavaScript or TypeScript is used.
					Familiar with the core concepts of ESLint and how to use it to lint JavaScript and TypeScript code.
					Best practices, code style, and code quality are very important to me so I always use ESLint in my projects.
			`,
			},
			{
				code: "prettier",
				label: "Prettier",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Prettier logo"
						src={prettierLogo}
					/>
				),
				level: 5,
				dateStarted: new Date(2021, 0, 1),
				description: removeNewLines`
					I use Prettier in all of my projects where JavaScript or TypeScript is used.
					Familiar with the core concepts of Prettier and how to use it to format JavaScript and TypeScript code.
					Best practices, code style, and code quality are very important to me so I always use Prettier in my projects.
			`,
			},
			{
				code: "stylelint",
				label: "StyleLint",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="StyleLint logo"
						src={stylelintLogo}
					/>
				),
				level: 3,
				dateStarted: new Date(2020, 0, 1),
				description: removeNewLines`
					Use StyleLint in all of my projects where CSS is used.
					Familiar with the core concepts of StyleLint and how to use it to lint CSS.
			`,
			},
			{
				code: "vite",
				label: "Vite/Webpack",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Vite logo"
						src={viteLogo}
					/>
				),
				level: 4,
				dateStarted: new Date(2018, 0, 1),
				description: removeNewLines`
					I have used Vite, ESBuild, and Webpack to bundle JavaScript and TypeScript code.
					I am familiar with the core concepts of each and how to use them to bundle code for production.
					Familiar with the plugin & loader ecosystem for each and how to configure them.
					My preference is Vite for new projects as it is very fast and has a great developer experience but would say I know Webpack the best.
			`,
			},
			{
				code: "bash",
				label: "Bash",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Bash logo"
						src={bashLogo}
					/>
				),
				level: 4,
				dateStarted: new Date(2018, 0, 1),
				description: removeNewLines`
					I have used Bash to write scripts for a few projects.
					I am familiar with the core concepts of Bash and how to use it to write scripts.
					Have used it to automate tasks such as running tests, linting code, and building projects.
			`,
			},
			{
				code: "powershell",
				label: "PowerShell",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="PowerShell logo"
						src={powershellLogo}
					/>
				),
				level: 5,
				dateStarted: new Date(2022, 0, 1),
				description: removeNewLines`
					Expert knowledge in PowerShell and how to use it to conduct a variety of scripting tasks.
					PowerShell is my preference for writing scripts and automating tasks over bash because of it's explicit nature and cross-platform support.
			`,
			},
			{
				code: "git",
				label: "Git",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Git logo"
						src={gitLogo}
					/>
				),
				level: 3,
				dateStarted: new Date(2016, 0, 1),
				description: removeNewLines`
					Git is my preference for version control and I use it in all of my projects.
					I am familiar with the core concepts of Git and how to use it to manage code.
					Have used it to manage code in both personal and team projects.
			`,
			},
			{
				code: "svn",
				label: "SVN",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="SVN logo"
						src={svnLogo}
					/>
				),
				level: 4,
				dateStarted: new Date(2022, 0, 1),
				description: null,
			},
			{
				code: "linux",
				label: "Linux",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Linux logo"
						src={linuxLogo}
					/>
				),
				level: 4,
				dateStarted: new Date(2021, 0, 1),
				description: removeNewLines`
					I use Fedora Linux as my daily driver and have used it for a few years now.
					I am familiar with the core concepts of Linux and how to run servers properly on it.
			`,
			},
			{
				code: "windows",
				label: "Windows",
				image: className => (
					<Image
						width={48}
						height={48}
						className={className}
						alt="Windows logo"
						src={windowsLogo}
					/>
				),
				level: 5,
				dateStarted: new Date(2012, 0, 1),
				description: null,
			},
		],
	},
];
