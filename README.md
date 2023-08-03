# FormGenAI

FormGenAI is a form generator application that leverages the power of Artificial Intelligence to create forms based on user descriptions.

## Installation

```bash
npm i 
```

## API and Credentials setup

This project uses OpenAI's GPT-3 model and Google's OAuth 2.0 for authentication. To use these services, you need to obtain API keys and client IDs.

Firstly, you need the OpenAI API Key:

```
OPENAI_API_KEY=your-open-ai-key
```

You must replace **your-open-ai-key** with your actual OpenAI API key. You can obtain this key by signing up on OpenAI's platform.

For setting up Google's OAuth 2.0, you need to perform the following steps:

1. **Create a Google Project:** Go to the Google Cloud Platform console and create a new project.
1. **Set up an OAuth consent screen:** Within your project, go to "APIs & Services" -> "OAuth Consent Screen" and fill in the required information.
1. **Enable necessary APIs:** Still in "APIs & Services", go to "Library" and enable the APIs you need (for example, Google Forms API).
1. **Create OAuth client ID credentials:** In "APIs & Services" -> "Credentials", click "Create Credentials" and select "OAuth client ID". After filling in the necessary information, your OAuth 2.0 Client ID and secret will be generated.
1. **Download the client configuration JSON file:** After the OAuth client ID is created, you can download the client configuration in a JSON file.
 
 The OpenAI API key should be added to your **'.env'** file in the root of your project directory, and the Google OAuth 2.0 JSON file should be added to your project's root directory with the name **'credentials.js.'**

## Usage

To start this project use the command:
```bash
npm start
```
## Contributing

Contributions to this project are welcome! If you wish to contribute, please follow these steps:

* For minor changes, feel free to submit a pull request.
* For larger changes or feature additions, please first open an issue describing what you would like to change or add. This allows the maintainers to discuss with you the proposed changes before work begins.
When making changes, please ensure to update or add tests as appropriate to maintain the integrity of the software.

Thank you for contributing to FormGenAI!
