<div align="left" style="position: relative;">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="right" width="30%" style="margin: -20px 0 0 20px;">
<h1>CHATTERJI</h1>
<p align="left">
	<em>Chatterji: Connect, Converse, Create Community</em>
</p>
<p align="left">
	<img src="https://img.shields.io/github/license/sohail-op/chatterji?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/sohail-op/chatterji?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/sohail-op/chatterji?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/sohail-op/chatterji?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="left"><!-- default option, no dependency badges. -->
</p>
<p align="left">
	<!-- default option, no dependency badges. -->
</p>
</div>
<br clear="right">

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)

---

##  Overview

The "chatterji" project is a robust chat application built on the MERN stack, designed to facilitate real-time communication. It solves the problem of fragmented conversation experiences by providing a unified platform with features like secure user authentication, live messaging, and cross-origin resource sharing. Key benefits include a stable, consistent environment for development and deployment, thanks to its meticulous dependency management. This application is ideal for developers looking to implement or enhance real-time communication features in their web projects.

---

##  Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Utilizes the MERN stack, integrating MongoDB, Express.js, React, and Node.js.</li><li>Client-server architecture with real-time communication enabled by Socket.io.</li><li>Modular structure with separation of concerns between frontend and backend.</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Uses ESLint (`eslintrc.json`) for static code analysis to maintain code quality.</li><li>Adheres to modern JavaScript standards, utilizing ES6+ features.</li><li>Type safety is partially enforced with TypeScript (`tsconfig.json`).</li></ul> |
| 📄 | **Documentation** | <ul><li>Documentation includes detailed `package.json` and `package-lock.json` files.</li><li>Installation, usage, and testing instructions are clearly provided using npm commands.</li><li>Language usage is diverse, with JavaScript, TypeScript, and CSS among others.</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Integrates with various NPM packages like `bcrypt`, `cors`, `dotenv`, and `jsonwebtoken` for enhanced functionality.</li><li>Real-time capabilities with `socket.io`.</li><li>Database integration using `mongoose` for MongoDB.</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Codebase is structured into multiple modules and packages, enhancing maintainability.</li><li>Clear separation between frontend and backend logic.</li><li>Reusable components and middleware for scalability.</li></ul> |
| 🧪 | **Testing**       | <ul><li>Basic testing setup with npm scripts (`npm test`).</li><li>Testing strategy and framework details are not extensively documented.</li><li>Focus on integration testing could be inferred from package dependencies.</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Performance optimizations likely through efficient use of Node.js and Express.</li><li>Real-time communication with minimal latency using `socket.io`.</li><li>Use of `bcrypt` for efficient hashing and security operations.</li></ul> |
| 🛡️ | **Security**      | <ul><li>Security measures include `jsonwebtoken` for handling JWTs, `bcrypt` for password hashing.</li><li>`cors` for managing cross-origin requests.</li><li>Environment variables managed securely using `dotenv`.</li></ul> |
| 📦 | **Dependencies**  | <ul><li>Managed through `npm`, with explicit version locking using `package-lock.json`.</li><li>Comprehensive list of dependencies including `express`, `mongoose`, and `socket.io`.</li><li>Dependencies are well-documented in `package.json` and `package-lock.json` files.</li></ul> |

---

##  Project Structure

```sh
└── chatterji/
    ├── backend
    │   ├── config
    │   ├── controllers
    │   ├── middleware
    │   ├── model
    │   ├── routes
    │   ├── server.js
    │   ├── socket
    │   └── util
    ├── frontend
    │   ├── .eslintrc.json
    │   ├── .gitignore
    │   ├── README.md
    │   ├── app
    │   ├── components
    │   ├── context
    │   ├── hooks
    │   ├── next.config.mjs
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── postcss.config.js
    │   ├── public
    │   ├── tailwind.config.ts
    │   ├── tsconfig.json
    │   ├── util
    │   └── zustand
    ├── package-lock.json
    └── package.json
```


###  Project Index
<details open>
	<summary><b><code>CHATTERJI/</code></b></summary>
	<details> <!-- backend Submodule -->
		<summary><b>backend</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/backend/server.js'>server.js</a></b></td>
				<td>- Backend/server.js establishes the server environment for the application, integrating essential middleware and routing for authentication, messaging, and user management<br>- It configures the server to handle CORS, JSON data, and cookies, and connects to the database<br>- The server is set to listen on a configurable port, ensuring the application's responsiveness to client requests.</td>
			</tr>
			</table>
			<details>
				<summary><b>model</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/backend/model/messageModel.js'>messageModel.js</a></b></td>
						<td>- Defines the data structure for messaging between users in a MongoDB database using Mongoose<br>- The schema captures essential fields such as receiver ID, sender ID, and the message content, each linked to the User model<br>- It also includes automatic timestamping for tracking the creation and update times of each message.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/backend/model/conversationModel.js'>conversationModel.js</a></b></td>
						<td>- Defines the data structure for conversations within the application, utilizing MongoDB through Mongoose<br>- It models conversations as collections of participants and messages, where participants are referenced by their user IDs and messages by their message IDs<br>- This setup facilitates the management and retrieval of conversation data across the application's backend architecture.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/backend/model/userModel.js'>userModel.js</a></b></td>
						<td>- Defines the data structure for user entities within the system using a MongoDB schema<br>- It specifies mandatory fields such as full name, username, and password, along with optional profile picture details<br>- The schema also enforces uniqueness on the username and restricts the gender field to predefined values, ensuring data integrity and consistency across the application.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>config</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/backend/config/connectDb.js'>connectDb.js</a></b></td>
						<td>- ConnectDb.js establishes the connection between the application and its MongoDB database using the mongoose library<br>- It handles successful connections by logging the database host and name, and manages connection errors by logging them and terminating the process, ensuring robust database interactions essential for the backend's functionality.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>controllers</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/backend/controllers/authController.js'>authController.js</a></b></td>
						<td>- AuthController.js manages user authentication processes for the backend, including user registration, login, and logout functionalities<br>- It utilizes bcrypt for password security, handles user data validation, and generates authentication tokens to maintain session states<br>- This component is crucial for securing user access and managing identities within the application.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/backend/controllers/userController.js'>userController.js</a></b></td>
						<td>- Manages user data retrieval for the application's sidebar by fetching all users except the currently logged-in user, ensuring privacy by excluding sensitive information<br>- Positioned within the backend controllers, it supports user interactions by providing necessary user details for UI components, enhancing the user experience and interface functionality.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/backend/controllers/messageController.js'>messageController.js</a></b></td>
						<td>- MessageController.js manages message interactions within the application, facilitating the sending and retrieval of messages between users<br>- It ensures messages are stored correctly and updates real-time communication through socket connections, enhancing user engagement by keeping conversations dynamic and responsive within the platform's messaging framework.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>routes</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/backend/routes/messageRoutes.js'>messageRoutes.js</a></b></td>
						<td>- Manages routing for message-related operations within the backend architecture<br>- Utilizing Express, it defines routes for sending and retrieving messages, each protected by token validation middleware<br>- The routes are handled by specific controller functions, ensuring secure and efficient message processing within the system.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/backend/routes/authRoutes.js'>authRoutes.js</a></b></td>
						<td>- Manages authentication processes within the application by defining routes for user login, logout, and signup operations<br>- Integrated with the backend's express framework, it utilizes functions from the authController to handle specific authentication tasks, ensuring secure user access and management across the system.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/backend/routes/userRoutes.js'>userRoutes.js</a></b></td>
						<td>- UserRoutes.js establishes a route within the backend architecture, specifically for fetching user data necessary for populating sidebars<br>- It integrates middleware to validate tokens, ensuring secure access to user information<br>- This route is crucial for maintaining user interface consistency and security across the application.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>socket</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/backend/socket/socket.js'>socket.js</a></b></td>
						<td>- Establishes a real-time communication server using Socket.IO within the backend architecture, managing user connections and disconnections to maintain a current list of online users<br>- It facilitates the mapping of user IDs to socket IDs, enabling targeted data transmission and enhancing interactive capabilities across the application.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>middleware</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/backend/middleware/validateTokenHandler.js'>validateTokenHandler.js</a></b></td>
						<td>- ValidateTokenHandler.js serves as a middleware component in the backend architecture, ensuring that each incoming request is authenticated<br>- It verifies the presence and validity of JWT tokens from request cookies, decodes them to fetch user details, and facilitates user identification before proceeding with subsequent request handling operations.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/backend/middleware/errorHandler.js'>errorHandler.js</a></b></td>
						<td>- Error handling middleware centralizes the management of common HTTP errors across the backend architecture<br>- It interprets error types, such as validation issues or unauthorized access, and standardizes client responses with error details, enhancing API reliability and debugging efficiency.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>util</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/backend/util/gentoken.js'>gentoken.js</a></b></td>
						<td>- Generates and manages user authentication tokens using JWT (JSON Web Tokens)<br>- Specifically, it creates a token that identifies a user, sets an expiration of 7 days, and securely stores this token in an HTTP-only cookie to enhance security<br>- This utility is crucial for maintaining user sessions and securing access within the backend architecture.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- frontend Submodule -->
		<summary><b>frontend</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/next.config.mjs'>next.config.mjs</a></b></td>
				<td>- NextConfig in the frontend directory configures URL rewrites for the project, specifically proxying API requests from the frontend to a backend server located at localhost:5000<br>- This setup simplifies development by allowing frontend components to communicate seamlessly with backend services under a unified API namespace.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/postcss.config.js'>postcss.config.js</a></b></td>
				<td>- Configures PostCSS plugins essential for the frontend's styling framework, specifically integrating TailwindCSS for utility-first CSS management and Autoprefixer for automatic vendor prefix addition<br>- This setup ensures consistent styling across different browsers and enhances the development experience by streamlining CSS maintenance within the project's frontend architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/.eslintrc.json'>.eslintrc.json</a></b></td>
				<td>- Configures ESLint for the frontend directory, specifically extending settings from "next/core-web-vitals" to ensure code quality and performance optimization align with Next.js framework standards<br>- This setup aids in maintaining consistent coding practices and enhances the project's ability to meet modern web vitals requirements efficiently.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/package-lock.json'>package-lock.json</a></b></td>
				<td>- The file `frontend/package-lock.json` serves a critical role in the management and consistency of the frontend application's dependencies within the larger codebase<br>- This JSON file locks down the exact versions of the npm packages that the project depends on, ensuring that all environments, from development to production, use the same versions<br>- This helps in avoiding discrepancies and potential bugs that could arise from version mismatches.

In the context of the entire project, this file ensures that the frontend, which appears to be built with React and Next.js (as indicated by the dependencies like `react`, `react-dom`, and `next`), maintains a stable, consistent set of dependencies that are known to work well together<br>- This stability is crucial for the reliability and maintainability of the application, facilitating smoother updates and compatibility checks as the project evolves.

Overall, the `package-lock.json` file is a foundational component that supports the frontend's infrastructure by managing dependencies efficiently, aligning with the project's need for a robust and error-resistant development environment.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/tsconfig.json'>tsconfig.json</a></b></td>
				<td>- Configures TypeScript for the frontend module, setting strict type-checking and module resolution tailored for a modern development environment with Next.js<br>- It enhances JavaScript interoperability and supports JSX, ensuring seamless integration and efficient build processes<br>- The configuration also customizes path aliases for simplified imports across the application.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/package.json'>package.json</a></b></td>
				<td>- Defines the configuration and dependencies for the frontend module of the application, specifying scripts for development, building, and deployment using Next.js<br>- It integrates libraries for UI components, state management, and API communication, ensuring a robust, interactive user interface aligned with modern web standards.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/tailwind.config.ts'>tailwind.config.ts</a></b></td>
				<td>- Configures TailwindCSS for a frontend application, specifying directories for style application and extending the theme with custom gradients<br>- It integrates the DaisyUI plugin to enhance UI components<br>- This setup ensures consistent styling across all pages and components, contributing to a unified and scalable frontend architecture.</td>
			</tr>
			</table>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<details>
						<summary><b>Profile</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/components/Profile/profileSection.jsx'>profileSection.jsx</a></b></td>
								<td>- ProfileSection, a React component within the frontend architecture, dynamically displays user profile information<br>- It integrates user data from both the authentication context and conversation-specific data, showing either the logged-in user's details or the selected conversation participant's details, including profile pictures and names<br>- This component enhances user interactivity and personalization in the application's user interface.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/components/Profile/profileContainer.jsx'>profileContainer.jsx</a></b></td>
								<td>- ProfileContainer serves as a key component within the frontend architecture, orchestrating the user profile interface<br>- It integrates ProfileHeader and ProfileSection components to construct a visually cohesive and functional profile area, utilizing styling to ensure an engaging user experience<br>- This component is crucial for displaying user-specific information in a structured and aesthetically pleasing manner.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/components/Profile/profileHeader.jsx'>profileHeader.jsx</a></b></td>
								<td>- ProfileHeader.jsx defines a React component that serves as the visual header for user profiles within the frontend architecture<br>- It features a styled header element that includes a title and a decorative divider, enhancing the user interface by clearly demarcating the profile section in a visually appealing manner.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Messages</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/components/Messages/messageHeader.jsx'>messageHeader.jsx</a></b></td>
								<td>- MessageHeader, a component within the frontend architecture, manages the display of conversation headers in the messaging interface<br>- It utilizes the useConversation hook to fetch and present user details, such as profile pictures and names, enhancing user interaction and visual engagement in the application's communication features.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/components/Messages/message.jsx'>message.jsx</a></b></td>
								<td>- Message.jsx serves as a component within the frontend architecture, rendering individual messages in a conversation<br>- It utilizes user authentication and conversation context to display messages with appropriate sender identification, profile pictures, and timestamps, enhancing the user interface by dynamically adjusting message alignment and visibility based on the sender.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/components/Messages/messageInput.jsx'>messageInput.jsx</a></b></td>
								<td>- MessageInput, located within the frontend components of the codebase, facilitates user interactions by enabling message input and submission<br>- It integrates a custom hook for sending messages and manages local state for message content<br>- The component enhances user experience by allowing message submission via an enter key press or an icon click, ensuring a seamless communication flow in the application's messaging feature.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/components/Messages/messages.jsx'>messages.jsx</a></b></td>
								<td>- Messages.jsx serves as a component within the frontend architecture, responsible for displaying message threads<br>- It utilizes custom hooks to fetch and subscribe to message updates, ensuring real-time communication<br>- The component efficiently handles loading states and renders each message using the Message component, providing a seamless user experience in viewing conversations.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/components/Messages/messageContainer.jsx'>messageContainer.jsx</a></b></td>
								<td>- MessageContainer serves as the primary user interface component for managing chat interactions within the application<br>- It dynamically displays chat headers, messages, and input fields based on user interaction, facilitated by state management from useConversation<br>- When no chat is selected, it prompts users to initiate a conversation, enhancing user engagement and experience.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Sidebar</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/components/Sidebar/conversations.jsx'>conversations.jsx</a></b></td>
								<td>- Conversations.jsx serves as a component within the frontend architecture, managing the display of user conversations in the application<br>- It utilizes a custom hook to fetch conversation data, which it then renders using the Conversation component, ensuring a smooth, scrollable interface for viewing ongoing chats.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/components/Sidebar/conversation.jsx'>conversation.jsx</a></b></td>
								<td>- Conversation.jsx serves as a component within the frontend architecture, managing the display and interaction of user conversations in the sidebar<br>- It utilizes Zustand for state management and SocketContext for real-time updates, highlighting online status and enabling conversation selection through a user-friendly interface that supports text truncation for better readability.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/components/Sidebar/sidebar.jsx'>sidebar.jsx</a></b></td>
								<td>- Sidebar.jsx serves as a component within the frontend architecture, providing a user interface element that houses a search bar and a chat toggle feature<br>- Positioned as a vertical panel, it enhances user interaction by offering search functionality and chat visibility control, contributing to the overall navigational efficiency and user experience of the application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/components/Sidebar/setting.jsx'>setting.jsx</a></b></td>
								<td>- Setting.jsx serves as a user interface component within the frontend architecture, specifically within the Sidebar module<br>- It provides interactive elements for user settings, including background customization and logout functionality, enhancing user experience by allowing personalization and secure session termination.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/components/Sidebar/searchbar.jsx'>searchbar.jsx</a></b></td>
								<td>- Searchbar, a component within the frontend architecture, enhances user interaction by enabling search functionality for conversations<br>- It utilizes React state hooks for managing user input and integrates custom hooks for fetching and setting conversation data<br>- Upon valid input, it filters and displays relevant conversation threads, improving navigation and user experience in the application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/components/Sidebar/chatToggle.jsx'>chatToggle.jsx</a></b></td>
								<td>- ChatToggle serves as a dynamic component within the frontend architecture, enabling users to switch between chat and settings interfaces<br>- It utilizes state management to display either the Conversations or Setting component based on user interaction, enhancing the application's interactivity and user experience<br>- This component is integral to the sidebar functionality in the user interface.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>hooks</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/hooks/useListenMessages.js'>useListenMessages.js</a></b></td>
						<td>- UseListenMessages is a custom React hook that integrates with the application's WebSocket communication system<br>- It listens for new messages broadcasted by the server and updates the conversation state accordingly<br>- This hook ensures real-time message updates within the user interface, enhancing the chat functionality of the application.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/hooks/useAuthData.js'>useAuthData.js</a></b></td>
						<td>- UseAuthData.js serves as a custom React hook within the frontend architecture, managing authentication data retrieval<br>- It leverages useMemo for performance optimization, ensuring minimal re-computation by tracking authentication status changes<br>- Primarily, it fetches and parses user data stored in local storage, facilitating efficient user state management across the application.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/hooks/useLogin.js'>useLogin.js</a></b></td>
						<td>- UseLogin.js serves as a custom React hook within the frontend architecture, facilitating user authentication<br>- It manages the login process by interfacing with the backend API, handling user credentials, maintaining session tokens via cookies, and updating authentication state contextually<br>- Additionally, it provides user feedback on the login status through notifications.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/hooks/useLogout.js'>useLogout.js</a></b></td>
						<td>- UseLogout.js serves as a custom React hook within the frontend architecture, facilitating user logout processes<br>- It integrates with the authentication context to update user status and employs Axios for server communication to handle logout requests<br>- Additionally, it manages loading states and provides user feedback through toast notifications on successful or failed logout attempts.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/hooks/useGetConversation.js'>useGetConversation.js</a></b></td>
						<td>- UseGetConversation is a custom React hook designed to manage the retrieval of conversation data from a backend API<br>- It handles asynchronous requests to fetch user conversations, manages loading states, and captures errors, providing feedback via toast notifications<br>- This hook centralizes conversation data fetching logic for the frontend, enhancing modularity and reusability across components.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/hooks/useSignup.js'>useSignup.js</a></b></td>
						<td>- useSignup.js serves as a custom React hook within the frontend architecture, facilitating user registration<br>- It integrates user input validation, communicates with the backend to register users, and manages UI feedback and navigation upon successful or failed registration attempts<br>- It also updates authentication state contextually, enhancing user experience and system security.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/hooks/useSendMessage.js'>useSendMessage.js</a></b></td>
						<td>- UseSendMessage is a custom React hook that facilitates message sending within the application's frontend<br>- It integrates with the backend to post messages to the selected conversation, manages loading states, and updates the conversation's messages dynamically<br>- Error handling and user feedback via toasts are also incorporated to enhance user experience.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/hooks/useGetMessages.js'>useGetMessages.js</a></b></td>
						<td>- UseGetMessages is a custom React hook that facilitates the retrieval of messages for a selected conversation from a backend service<br>- It manages loading states and integrates error handling<br>- The hook leverages Zustand for state management and Axios for HTTP requests, updating the conversation state with fetched data.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>zustand</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/zustand/useConversation.js'>useConversation.js</a></b></td>
						<td>- Manages conversation state within the frontend application, specifically handling user-selected conversations and message arrays<br>- `useConversation` facilitates dynamic updates to the conversation's selected state and the associated messages, ensuring the UI remains responsive and current with user interactions and data changes in the broader application context.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>context</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/context/SocketContext.jsx'>SocketContext.jsx</a></b></td>
						<td>- SocketContext.jsx establishes a real-time communication framework within the application, managing WebSocket connections for authenticated users<br>- It dynamically handles user connectivity states, facilitating the tracking and display of online users, thereby enhancing interactive features across the client-side of the architecture.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/context/AuthContext.jsx'>AuthContext.jsx</a></b></td>
						<td>- AuthContext.jsx establishes a centralized authentication management system within the frontend of the application<br>- It provides mechanisms to access and update user authentication data, leveraging React's context API to facilitate state management across the component hierarchy, ensuring efficient user state handling without frequent prop drilling.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>app</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/app/globals.css'>globals.css</a></b></td>
						<td>- Defines the global styling and theming for the frontend application, integrating Tailwind CSS for foundational, component-level, and utility styles<br>- It sets color schemes for light and dark modes, customizes the body's background with a gradient and image, and ensures a seamless, scrollbar-free user interface across various browsers.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/app/layout.jsx'>layout.jsx</a></b></td>
						<td>- RootLayout serves as the foundational layout component for the Chatterji application, integrating global styles, authentication, and real-time communication functionalities<br>- It wraps all page components in authentication and socket contexts, ensuring secure and interactive user sessions, and includes visual notifications through Toaster<br>- The layout also sets application-wide metadata like title and description.</td>
					</tr>
					</table>
					<details>
						<summary><b>(pages)</b></summary>
						<blockquote>
							<details>
								<summary><b>login</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/app/(pages)/login/page.jsx'>page.jsx</a></b></td>
										<td>- Login.jsx serves as the user authentication interface within the frontend application, enabling users to log in using their credentials<br>- It utilizes React hooks for state management and interacts with a custom hook to handle the login process, providing feedback through a loading indicator during the authentication phase and offering navigation options for password recovery and account registration.</td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>signup</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/app/(pages)/signup/page.jsx'>page.jsx</a></b></td>
										<td>- Manages the user signup process within the frontend application, utilizing a multi-step form interface to collect essential user data<br>- It leverages React state management to handle user inputs and navigation between form stages, and integrates with a custom hook for submitting user data<br>- Additionally, it provides navigation to the login page for existing users.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/app/(pages)/signup/form1.jsx'>form1.jsx</a></b></td>
										<td>- Form1 serves as a user interface component within the frontend application, specifically facilitating user registration<br>- It collects essential user details like full name and username through a structured form, ensuring these inputs are managed and passed effectively for further processing or validation in the signup flow.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/app/(pages)/signup/form3.jsx'>form3.jsx</a></b></td>
										<td>- Form3 serves as a component within the signup process, specifically handling user input for password creation and confirmation<br>- It facilitates data collection and validation by providing input fields for password and confirm password, ensuring these inputs are managed and updated through the provided handleChange function<br>- This component enhances the user experience by maintaining a consistent and interactive interface.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/app/(pages)/signup/form2.jsx'>form2.jsx</a></b></td>
										<td>- Form2 in the signup module of the frontend application handles user input for gender selection during the registration process<br>- It provides a user interface with radio buttons for gender options, ensuring a smooth data collection and interaction flow, which is crucial for user profile completeness and accuracy in the broader system architecture.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>(home)</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/app/(home)/page.tsx'>page.tsx</a></b></td>
								<td>- Home page.tsx serves as the primary user interface for authenticated users within the frontend application<br>- It integrates components like Sidebar, MessageContainer, and ProfileContainer to construct the main view<br>- Additionally, it utilizes authentication context to redirect unauthenticated users to the login page, ensuring secure user access.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>util</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/sohail-op/chatterji/blob/master/frontend/util/extractTime.js'>extractTime.js</a></b></td>
						<td>- ExtractTime.js serves as a utility within the frontend architecture, providing functionality to convert a date string into a formatted time string<br>- It processes the input to output hours and minutes in a user-friendly format, enhancing the interface's ability to display time consistently across the application.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with chatterji, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Package Manager:** Npm


###  Installation

Install chatterji using one of the following methods:

**Build from source:**

1. Clone the chatterji repository:
```sh
❯ git clone https://github.com/sohail-op/chatterji
```

2. Navigate to the project directory:
```sh
❯ cd chatterji
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




###  Usage
Run chatterji using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


###  Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


---
##  Project Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

##  Contributing

- **💬 [Join the Discussions](https://github.com/sohail-op/chatterji/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/sohail-op/chatterji/issues)**: Submit bugs found or log feature requests for the `chatterji` project.
- **💡 [Submit Pull Requests](https://github.com/sohail-op/chatterji/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/sohail-op/chatterji
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/sohail-op/chatterji/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=sohail-op/chatterji">
   </a>
</p>
</details>

---

##  License

The MIT License (MIT) 2017 - [Sohail Khan](https://github.com/sohail-op). Please have a look at the [LICENSE.md](https://github.com/sohail-op/chatterji/blob/main/LICENSE) for more details.

---
