/*
    netacad-automation
    Copyright (C) 2026 Saurabh Kumar Yadav

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const RAW_DB = {};

const QUIZ_DB = {
    "1.4.2": [
      {
        "question": "A college has deployed next-generation analytics. Which question would most likely be answered by next generation analytics that could not be answered by traditional analysis tools?",
        "answers": [
          "Which class sections do students consider the most in the online environment without actually enrolling?"
        ]
      },
      {
        "question": "A college uses a learning management system (LMS) to host lecture materials and provide access to assignments and assessments. A teacher uses the LMS to check activities completed by students in a particular course. Which data analytics method is being used?",
        "answers": [
          "descriptive"
        ]
      },
      {
        "question": "A large online ordering company collects the sales history of its customers. Using this historical data, the online company sends customized sales advertisements to a specific group of customers. Which data analytics method is being used?",
        "answers": [
          "prescriptive"
        ]
      },
      {
        "question": "What is an example of descriptive data analysis?",
        "answers": [
          "an hourly traffic report for a highway"
        ]
      },
      {
        "question": "What is a benefit of analyzing data in motion rather than a static data set?",
        "answers": [
          "Critical decisions can be made more quickly."
        ]
      },
      {
        "question": "Which type of results do data analysts calculate from larger datasets to inform decision making?",
        "answers": [
          "accurate"
        ]
      },
      {
        "question": "What is a characteristic of predictive data analysis?",
        "answers": [
          "establishes a future trend line based on past data"
        ]
      },
      {
        "question": "Match the step in the Data Analysis Lifecycle with the description.",
        "manual": true,
        "answers": [],
        "missingAnswers": true
      },
      {
        "question": "What is the first step in any analytic project?",
        "answers": [
          "defining the goal of the project"
        ]
      }
    ],
    "2.4.2": [
      {
        "question": "What term describes the key characteristics that are observed or measured as part of an experiment or analysis?",
        "answers": [
          "variable"
        ]
      },
      {
        "question": "Match the variable with the description.",
        "manual": true,
        "answers": [],
        "missingAnswers": true
      },
      {
        "question": "What category of variables includes nominal or ordinal variables?",
        "answers": [
          "categorical"
        ]
      },
      {
        "question": "Which statement is an accurate description of discrete variables?",
        "answers": [
          "They are quantitative with a finite set of values."
        ]
      },
      {
        "question": "Match the variable with the type of value.",
        "manual": true,
        "answers": [],
        "missingAnswers": true
      },
      {
        "question": "Which statement describes SQL?",
        "answers": [
          "It is a powerful data management language that allows data analysts to interact with data stored in relational databases."
        ]
      },
      {
        "question": "Which statement describes Tableau?",
        "answers": [
          "It is a visual analytics platform for exploring, analyzing, and managing data."
        ]
      },
      {
        "question": "Which two statements describe the Kaggle web site? (Choose two.)",
        "answers": [
          "It offers community machine learning competitions among data science enthusiasts.",
          "It is an online community for data scientists and machine learning enthusiasts to share ideas."
        ]
      },
      {
        "question": "A data analyst is performing data cleaning on an Excel spreadsheet that contains collected data. Which Excel function would the analyst use to find integer data that is larger than expected?",
        "answers": [
          "MAX"
        ]
      },
      {
        "question": "A data analyst is performing data cleaning on an Excel spreadsheet that contains collected data. The data records have been marked with mixed formatting. The analyst wants to remove all formatting and reformat data. Which operation should the analyst perform to remove current formatting?",
        "answers": [
          "Highlight data range -> Home tab -> Clear -> Clear Formats"
        ]
      }
    ],
    "3.5.2": [
      {
        "question": "What term is used for the process of conditioning data into a form that can be analyzed?",
        "answers": [
          "transforming"
        ]
      },
      {
        "question": "What task is performed as part of the loading process in data preparation?",
        "answers": [
          "transferring the data into a database"
        ]
      },
      {
        "question": "Which two tasks are part of the transforming data process? (Choose two.)",
        "answers": [
          "reviewing the data and addressing erroneous or missing values",
          "eliminating the data that is not relevant to the analysis question to be answered"
        ]
      },
      {
        "question": "In a data analysis project, which process gathers all grades for students enrolled in a college course?",
        "answers": [
          "extract"
        ]
      },
      {
        "question": "What is a characteristic of open data?",
        "answers": [
          "data that lacks intellectual property restrictions"
        ]
      },
      {
        "question": "An analyst is reviewing gathered data from various sources and modifying incompatible metrics into a usable form. In which ETL step would this task be completed in?",
        "answers": [
          "transform"
        ]
      },
      {
        "question": "What are Web scrapping tools used for in big data analytics?",
        "answers": [
          "to automatically extract data from HTML pages"
        ]
      },
      {
        "question": "Which universal file format is organized in rows and has the columns separated by a delimiter character?",
        "answers": [
          "CSV"
        ]
      },
      {
        "question": "Which two methods are used to collect unstructured data for analysis? (Choose two.)",
        "answers": [
          "using a web-scraping tool",
          "obtaining data through an API"
        ]
      },
      {
        "question": "What are two important considerations when selecting data for an analysis project? (Choose two.)",
        "answers": [
          "the data is relevant to the original business question",
          "the data is current and updated frequently"
        ]
      }
    ],
    "4.4.2": [
      {
        "question": "What keyboard shortcut can be used in Microsoft Excel to select all the data?",
        "answers": [
          "CTRL-A"
        ]
      },
      {
        "question": "What is the Microsoft Excel “CONCATENATE” function used for?",
        "answers": [
          "it is used to combine the data from one or more columns into a single column"
        ]
      },
      {
        "question": "What is the Microsoft Excel Data > Sort command used for?",
        "answers": [
          "it is used to arrange the contents of a range or array"
        ]
      },
      {
        "question": "How is an active cell displayed in Microsoft Excel?",
        "answers": [
          "a wide dark border"
        ]
      },
      {
        "question": "What is the name of the Microsoft Excel function in the formula “=INDEX(ProductSales,MATCH(1,($A2=ProductSales[Country])*($B2=ProductSales[Product]),0), 3)”?",
        "answers": [
          "INDEX"
        ]
      },
      {
        "question": "In Microsoft Excel, what is the “INDEX” function used for?",
        "answers": [
          "it is used to return a value or the reference to a value from within a table or range"
        ]
      },
      {
        "question": "What is the Microsoft Excel “LEN” function used for?",
        "answers": [
          "it returns the number of characters in a text string in a cell"
        ]
      },
      {
        "question": "What sign do all Microsoft Excel formulas start with?",
        "answers": [
          "equal sign (=)"
        ]
      },
      {
        "question": "In Microsoft Excel, what is a characteristic of an “absolute reference”?",
        "answers": [
          "it is indicated by preceding a cell reference in a formula with a $ meaning the cell reference will not change when the formula is copied to a new location"
        ]
      }
    ],
    "5.6.2": [
      {
        "question": "What are inferential data sets?",
        "answers": [
          "They are data sets gathered from a representative sample to make generalizations or predictions about a population."
        ]
      },
      {
        "question": "How is the Microsoft Excel VLOOKUP tool used in data analysis?",
        "answers": [
          "to find specific information in a large spreadsheet"
        ]
      },
      {
        "question": "What can a data analyst do if they wanted to remove duplicate values in a Microsoft Excel spreadsheet?",
        "answers": [
          "use VLOOKUP"
        ]
      },
      {
        "question": "Which three key pieces of information are required to perform a VLOOKUP function in Microsoft Excel? (Choose three.)",
        "answers": [
          "the column number in the range that contains the return value",
          "the range where the value is located",
          "the lookup value"
        ]
      },
      {
        "question": "A data analyst wants to find data point values that are significantly different from others in a data set. What are these values called?",
        "answers": [
          "outliers"
        ]
      },
      {
        "question": "Why are different sampling techniques used to gather inferential statistical data?",
        "answers": [
          "to reduce error and increase confidence in the generalizations about the findings"
        ]
      },
      {
        "question": "Which type of inferential and machine learning analysis is used to find groups of observations that are similar to each other?",
        "answers": [
          "cluster"
        ]
      },
      {
        "question": "Why is regression analytics used in the inferential and machine learning analyses of big data?",
        "answers": [
          "It is used to quantify the relationship, if any, between the variations of one or more variables."
        ]
      },
      {
        "question": "A data analyst wants to display the various segments of a country’s energy sources (e.g., oil, coal, gas, solar, wind) contributing to 100% of its energy sources in a visual format. What type of chart would be best used to accomplish this?",
        "answers": [
          "pie chart"
        ]
      },
      {
        "question": "A data analyst wants to display outliers in the data set. Which type of visual representation would best suit this task?",
        "answers": [
          "scatter plot"
        ]
      }
    ],
    "6.3.2": [
      {
        "question": "What is a flat file database?",
        "answers": [
          "a database that stores records in a single file with no hierarchical structure"
        ]
      },
      {
        "question": "Which commonly used SQL statement is necessary to retrieve data from one or more tables in a database?",
        "answers": [
          "SELECT"
        ]
      },
      {
        "question": "Which SQL statement is used to filter data in a database?",
        "answers": [
          "WHERE"
        ]
      },
      {
        "question": "What is used to show how the tables in a database are related to one another?",
        "answers": [
          "ERD"
        ]
      },
      {
        "question": "In the SQL statement ” SELECT genre FROM movies” what is specified by “genre”?",
        "answers": [
          "the column"
        ]
      },
      {
        "question": "Which structure in a table represents an individual record contained in the database?",
        "answers": [
          "row"
        ]
      },
      {
        "question": "What is represented by the comma-separated list of items following the SELECT command in this example?",
        "answers": [
          "columns (attributes)"
        ]
      },
      {
        "question": "Which three elements of a relational database are defined in the schema? (Choose three.)",
        "answers": [
          "attributes",
          "relationships",
          "tables"
        ]
      }
    ],
    "7.5.2": [
      {
        "question": "Which two SQL statements are used to create and change a database schema? (Choose two.)",
        "answers": [
          "ALTER",
          "CREATE"
        ]
      },
      {
        "question": "Refer to the exhibit. You need to get information about customer purchases that is stored in the two tables. You would like to see data from the OrderID, CustomerName, OrderAmount, and OrderDate columns. To obtain this information, how would you complete the following partial SQL query?",
        "answers": [
          "INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;"
        ]
      },
      {
        "question": "In combination with primary and foreign keys, which SQL statement is the most common method for joining fields from multiple tables?",
        "answers": [
          "JOIN"
        ]
      },
      {
        "question": "Refer to the exhibit. Which type of SQL JOIN operation would return all the rows from Table 1 and Table 2?",
        "answers": [
          "FULL JOIN"
        ]
      },
      {
        "question": "Which JOIN clause would join the two tables Orders and Customers, using the CustomerID field in both tables as the relationship between the two tables?",
        "answers": [
          "ON Orders.CustomerID=Customers.CustomerID"
        ]
      },
      {
        "question": "Which type of key uniquely defines each table row in a relational database?",
        "answers": [
          "primary key"
        ]
      },
      {
        "question": "What is the function of a foreign key in a relational database table?",
        "answers": [
          "to define a relationship with a primary key in a different table"
        ]
      },
      {
        "question": "Review the columns and descriptions in each table, Movie, and Award. Data from the two tables need to be combined to extract the title and cost of movies that won awards. Can a NATURAL JOIN be used to accomplish the desired result?",
        "answers": [
          "No, because the Date column contains different data types in each table."
        ]
      },
      {
        "question": "What is the result of the query shown in the example?",
        "answers": [
          "The comment made by PuzoFan76 for the movie with the ID 3456 will be modified to say, “This is a new comment.”"
        ]
      },
      {
        "question": "What are two types of data that benefit from NoSQL data storage? (Choose two.)",
        "answers": [
          "data with flexible formats that can change over time",
          "high volumes of unstructured data"
        ]
      }
    ],
    "8.4.2": [
      {
        "question": "Your company has tasked you with learning about the features and benefits of using Tableau as a business intelligence tool. From your research, what are two use cases best suited for Tableau? (Choose two.)",
        "answers": [
          "combining charts to build interactive dashboards",
          "creating meaningful data visualizations"
        ]
      },
      {
        "question": "Which area in the Tableau window is used to change the visual elements of a visualization to make it clearer or more impactful?",
        "answers": [
          "Marks"
        ]
      },
      {
        "question": "You are performing data analysis on a dataset and are unsure on how to perform certain tasks using Tableau Public. Under which tab could you find how-to-videos to help complete these tasks?",
        "answers": [
          "Resources"
        ]
      },
      {
        "question": "What term is used in Tableau to refer to visualizations?",
        "answers": [
          "vizzes"
        ]
      },
      {
        "question": "What two options are available to connect to specific online data stores when creating a Viz in Tableau Public? (Choose two)",
        "answers": [
          "OData",
          "Google Drive"
        ]
      },
      {
        "question": "How does the Show Me button in Tableau Public identify the recommended chart type for the uploaded data?",
        "answers": [
          "red border"
        ]
      },
      {
        "question": "What is the maximum number of views or sheets that can be added to a Tableau dashboard?",
        "answers": [
          "unlimited"
        ]
      },
      {
        "question": "Match the Tableau product with the description.",
        "manual": true,
        "answers": [],
        "missingAnswers": true
      },
      {
        "question": "Match the Tableau profile page tab with the respective content.",
        "manual": true,
        "answers": [],
        "missingAnswers": true
      }
    ],
    "9.3.2": [
      {
        "question": "What principle prevents the disclosure of information to unauthorized people, resources, and processes?",
        "answers": [
          "confidentiality"
        ]
      },
      {
        "question": "What type of cybersecurity laws protect you from an organization that might want to share your sensitive data?",
        "answers": [
          "privacy"
        ]
      },
      {
        "question": "Which two methods help to ensure data integrity? (Choose two.)",
        "answers": [
          "hashing",
          "data consistency checks"
        ]
      },
      {
        "question": "What type of bias is being applied when the interpretation of data from a study is done in a way that confirms the original beliefs of the analyst?",
        "answers": [
          "confirmation"
        ]
      },
      {
        "question": "What statement describes the occurrence of a selection bias in an analysis of data?",
        "answers": [
          "It can occur when the data used is not representative of the overall population that is being investigated."
        ]
      },
      {
        "question": "What impact might outliers have on an analysis?",
        "answers": [
          "The results might be distorted or overly biased."
        ]
      },
      {
        "question": "Colleagues suggest that you should record your expected results before beginning the analysis and avoid selecting only data and methods that support your assumptions. Why are the two suggestions important?",
        "answers": [
          "They help to avoid bias in the analysis."
        ]
      },
      {
        "question": "Which two functions help to ensure the confidentiality of personal data? (Choose two.)",
        "answers": [
          "data encryption",
          "multi-factor authentication"
        ]
      },
      {
        "question": "A corporation is vigilant about maintaining equipment, creating backups, and keeping operating systems and software up to date. Which component of the CIA triad do these measures support?",
        "answers": [
          "Availability"
        ]
      },
      {
        "question": "A person searches the internet for accessories for a newly purchased puppy. Suddenly this person begins receiving multiple promotional emails from many different pet stores. What feature of the CIA triad has been abused?",
        "answers": [
          "Confidentiality"
        ]
      }
    ],
    "10.3.2": [
      {
        "question": "Who is the intended audience of your data project portfolio?",
        "answers": [
          "prospective employers"
        ]
      },
      {
        "question": "Which option should be considered when developing a data project portfolio?",
        "answers": [
          "it should be organized and easy to navigate"
        ]
      },
      {
        "question": "Which two programming languages are most useful for data analysis? (Choose two.)",
        "answers": [
          "R",
          "Python"
        ]
      },
      {
        "question": "Why is the Python programming language increasingly integral to data science?",
        "answers": [
          "the availability of many libraries to perform data related tasks"
        ]
      },
      {
        "question": "Which Python code library is commonly used when developing a program to provide complex data visualization?",
        "answers": [
          "Matplotlib"
        ]
      },
      {
        "question": "What is a feature of Jupyter Notebooks?",
        "answers": [
          "It provides a way to run code interactively within a web browser."
        ]
      },
      {
        "question": "What is a feature of project portfolios that prospective employers consider to be important when recruiting potential data analysts?",
        "answers": [
          "each portfolio clearly and uniquely presents the data projects for the potential data analyst"
        ]
      },
      {
        "question": "What is a limitation of using spreadsheets in analysing data?",
        "answers": [
          "Changing how the data is displayed in a spreadsheet may also manipulate the data."
        ]
      },
      {
        "question": "What is the best way to store and manage a dataset that consists of two million records?",
        "answers": [
          "a relational database"
        ]
      }
    ]
};

const FINAL_EXAM_DB = [
    {
      "question": "Match the task and purpose to the appropriate Big Data analytics method.",
      "manual": true,
      "answers": [],
      "imageUrl": "https://itexamanswers.net/wp-content/uploads/2023/07/2025-04-11_154644.jpg"
    },
    {
      "question": "Match the type of data analysis with the question it can answer.",
      "manual": true,
      "answers": [],
      "imageUrl": "https://itexamanswers.net/wp-content/uploads/2023/07/2025-04-11_160136.jpg"
    },
    {
      "question": "Which statement is true concerning data analytics?",
      "answers": [
        "Predictive analytics uses simulation models and forecasting to suggest what could happen."
      ]
    },
    {
      "question": "A data analyst uses Excel and Tableau to identify patterns and correlations in a dataset to draw conclusions. Which phase of the analytic process is the analyst currently working on?",
      "answers": [
        "analyzing the data"
      ]
    },
    {
      "question": "Refer to the exhibit. A data analyst wants to create a formula in Microsoft Excel that will automatically calculate the net revenue from the sales of dining sets. Which formula inserted in cell F2 will accomplish this?",
      "answers": [
        "=(C2*(B2-D2)*E2)"
      ]
    },
    {
      "question": "Which type of variable is used for qualitative values such as gender or eye color?",
      "answers": [
        "nominal"
      ]
    },
    {
      "question": "What are three resources provided by the Kaggle web site? (Choose three.)",
      "answers": [
        "publicly available datasets",
        "code",
        "community competitions"
      ]
    },
    {
      "question": "Match the variable with the description.",
      "manual": true,
      "answers": [],
      "imageUrl": "https://itexamanswers.net/wp-content/uploads/2023/07/2025-04-11_160309.jpg"
    },
    {
      "question": "Match the ETL process with its description.",
      "manual": true,
      "answers": [],
      "imageUrl": "https://itexamanswers.net/wp-content/uploads/2023/07/2025-04-12_142453.jpg"
    },
    {
      "question": "Which statement is true about the ELT and ETL process?",
      "answers": [
        "In the ELT process, the transform step occurs on the stored data as it is used."
      ]
    },
    {
      "question": "An analyst in an online order company is researching products that online customers spend the most time browsing for on the website but do not buy. The result of the analysis will enable the company to release quick discount notices on the website to encourage customers to buy those products. What relevant data is required to do the research?",
      "answers": [
        "streaming customer-viewing data"
      ]
    },
    {
      "question": "Which two tasks are performed as part of the transform step of the ETL data process? (Choose two.)",
      "answers": [
        "removing the blank records",
        "standardizing formats such as date, time, and location"
      ]
    },
    {
      "question": "Match the Microsoft Excel function with its description.",
      "manual": true,
      "answers": [],
      "imageUrl": "https://itexamanswers.net/wp-content/uploads/2023/07/2025-04-12_142623.jpg"
    },
    {
      "question": "Which option in Microsoft Excel represents a formula with an absolute reference?",
      "answers": [
        "=($A$1-$B$1))"
      ]
    },
    {
      "question": "A data analyst needs to organize sales data for analysis. Which Excel function can order the data by date sold, with the most recent sales listed first?",
      "answers": [
        "Sort & Filter"
      ]
    },
    {
      "question": "How can data analysts use the Conditional Formatting tool in Excel to aid in data analysis of bike sales records?",
      "answers": [
        "to highlight values in the revenue column that are above average"
      ]
    },
    {
      "question": "A learner is analyzing a large volume of data in a Microsoft Excel spreadsheet and wishes to find duplicate data values. The data has been organized in a table where each row has different but related forms of data in each column. Which Microsoft Excel function can be used to do this?",
      "answers": [
        "VLOOKUP"
      ]
    },
    {
      "question": "A data analyst wants to compare the average life expectancy and GDP for forty countries. Which type of visual representation would best suit this task?",
      "answers": [
        "scatter plots"
      ]
    },
    {
      "question": "The figure contains a section of an Excel spreadsheet. Cell C2 contains the formula “=VLOOKUP(B1,$A$2:$A$10,1,FALSE)” When cell C2 is clicked “#N/A” is displayed.",
      "answers": [
        "No duplicate value for the value entered in cell B2 is found."
      ]
    },
    {
      "question": "What is a statistical analysis result that a descriptive statistical analysis will not provide?",
      "answers": [
        "predictions made about other data sets that are not in the population"
      ]
    },
    {
      "question": "Refer to the exhibit. Which option will correctly display the user names and email addresses of users in this table?",
      "answers": [
        "SELECT user_id, user_name, user_email\nFROM User"
      ]
    },
    {
      "question": "Drag the SQL Data Manipulation Language (DML) statements to the correct description.",
      "manual": true,
      "answers": [],
      "imageUrl": "https://itexamanswers.net/wp-content/uploads/2023/07/2025-04-11_160818.jpg"
    },
    {
      "question": "Refer to the exhibit. A portion of the Movie table from the Movies database is shown. A data analyst is writing a query that will return the title and release date of movies released after 2000. The analyst further needs the list ordered by the release date. Which query will return the required results?",
      "answers": [
        "SELECT Title, Release_date\nFROM Movie\nWHERE Release_date > ‘2000-12-31’\nORDER BY Release-date"
      ]
    },
    {
      "question": "Match the type of database to the best description.",
      "manual": true,
      "answers": [],
      "imageUrl": "https://itexamanswers.net/wp-content/uploads/2023/07/2025-04-11_160902.jpg"
    },
    {
      "question": "What is the purpose of the DML language commands in SQL?",
      "answers": [
        "to select, update, insert or delete records and values from a table"
      ]
    },
    {
      "question": "What does a field refer to in database schema terminology?",
      "answers": [
        "a specific attribute of an individual record"
      ]
    },
    {
      "question": "Refer to the exhibit. A data analyst writes a SQL query to extract information from multiple tables in the Movies database. To complete the ON command, what needs to be entered in place of the question mark in this query?",
      "answers": [
        "r.MovieTitle;"
      ]
    },
    {
      "question": "Refer to the exhibit. Match the JOIN operation with the proper description.",
      "manual": true,
      "answers": [],
      "imageUrl": "https://itexamanswers.net/wp-content/uploads/2023/07/i411151v6n1_join_tables.jpg"
    },
    {
      "question": "Which two are benefits of organizing information from multiple datasets into a dashboard? (Choose two)",
      "answers": [
        "The information is easily visualized.",
        "The information is easily analyzed."
      ]
    },
    {
      "question": "What Tableau Public feature is used to consolidate multiple views and visualizations?",
      "answers": [
        "dashboards"
      ]
    },
    {
      "question": "Why would you use Tableau in your data analysis?",
      "answers": [
        "To create visualizations."
      ]
    },
    {
      "question": "Match the data analysis tool with the use case.",
      "manual": true,
      "answers": [],
      "imageUrl": "https://itexamanswers.net/wp-content/uploads/2023/07/2025-04-12_142757.jpg"
    },
    {
      "question": "Which statement is true in respect of avoiding bias in data analytics?",
      "answers": [
        "avoid selecting only data and methods that support your assumptions"
      ]
    },
    {
      "question": "What are two methods that ensure confidentiality? (Choose two.)",
      "answers": [
        "encryption",
        "authentication"
      ]
    },
    {
      "question": "A data analyst conducting a study stops collecting more data once the evidence starts to support the hypothesis. What type of bias has the analyst introduced into the findings?",
      "answers": [
        "confirmation"
      ]
    },
    {
      "question": "Which type of bias in data analysis can be caused by the influence of outliers?",
      "answers": [
        "information"
      ]
    },
    {
      "question": "Which three features should your data project portfolio contain to ensure that it is considered favorably by employers and recruiters? (Choose three.)",
      "answers": [
        "there are links to all your projects on the homepage",
        "each project has a clear outcome or conclusion",
        "it is organized and easy to navigate"
      ]
    },
    {
      "question": "Why is the Jupyter Notebook tool useful when developing and testing data analysis software?",
      "answers": [
        "program execution output is displayed dynamically in real-time"
      ]
    },
    {
      "question": "Which data analytic tool can create interactive documents containing executable program code and markdown text?",
      "answers": [
        "Jupyter Notebooks"
      ]
    },
    {
      "question": "What are the three functions of programming languages optimized for data analysis? (Choose three)",
      "answers": [
        "statistical analysis",
        "data visualization",
        "data cleaning"
      ]
    },
    {
      "question": "Refer to the exhibit. What is the resulting output from the formula in cell D8?",
      "answers": [
        "6"
      ]
    },
    {
      "question": "Which Microsoft Excel formula would correctly multiply a value in cell A1 with a value in cell A19?",
      "answers": [
        "=A1*A19"
      ]
    },
    {
      "question": "What are two plain-text file types that are compatible with numerous applications and use a standard method of representing data records? (Choose two.)",
      "answers": [
        "JSON",
        "XML"
      ]
    },
    {
      "question": "What is an outlier in data analytics?",
      "answers": [
        "it is a value or data point that varies significantly from others in the data set"
      ]
    },
    {
      "question": "What is referenced by the FROM statement in an SQL query?",
      "answers": [
        "the table containing the data"
      ]
    },
    {
      "question": "You are preparing a presentation that needs a visualization showing the relative levels of coffee production in the coffee regions of the world. Which type of visualization in Tableau is well suited for displaying this type of data?",
      "answers": [
        "bubble map"
      ]
    },
    {
      "question": "What assurance does data integrity provide?",
      "answers": [
        "Data is unaltered in transit."
      ]
    },
    {
      "question": "Which feature of Python reduces the coding requirements when data tasks such as exploratory data analysis and machine learning are required?",
      "answers": [
        "The availability of code libraries such as NumPy and Scikit-learn."
      ]
    },
    {
      "question": "What are two types of continuous variables? (Choose two.)",
      "answers": [
        "ratio",
        "interval"
      ]
    },
    {
      "question": "What is a pivot table in Microsoft Excel?",
      "answers": [
        "a function to automatically summarize, analyze, explore, and present data"
      ]
    },
    {
      "question": "Which action is taken during the data investigation step of the data analysis lifecycle?",
      "answers": [
        "Determine if the data is complete and relevant for the analysis."
      ]
    }
];