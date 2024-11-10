# Near-Earth Objects Visualization

This project is a React application that visualizes data about Near-Earth Objects (NEOs) fetched from NASA's NeoWs API. The app allows users to view NEO data in both chart and table formats, filter data by orbiting body, and download the displayed data as a CSV file.

## Features

- **Data Visualization:**

  - Displays NEOs' minimum, maximum, and average estimated diameters.
  - Visualizes data using a non-stacked horizontal bar chart with Recharts.
  - Provides a table view of the NEO data.

- **Data Filtering:**

  - Users can filter NEOs by the orbiting body they are currently orbiting.

- **View Switcher:**

  - Users can switch between the chart view and the table view.

- **Download CSV:**

  - Users can download the currently displayed NEO data as a CSV file.

- **Responsive Design:**
  - The application is responsive and works well on different screen sizes.

## Technologies Used

- **React** with **TypeScript**
- **Tailwind CSS** for styling
- **Recharts** for data visualization
- **NASA's NeoWs API** for fetching NEO data

## Getting Started

### Prerequisites

- **Node.js** (version 20 or higher)
- **npm** (version 10 or higher)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repository-url>
   cd neo-visualization
   ```
2. **Install dependencies and start the project:**
   ```bash
   npm install
   npm start
   ```
