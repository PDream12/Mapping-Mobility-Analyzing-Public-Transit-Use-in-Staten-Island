# Mapping Mobility Staten Island

A comprehensive analysis platform for public transportation, demographics, and crime rates in Staten Island. This project provides interactive visualizations and data analysis tools to understand the relationship between transportation accessibility, socioeconomic factors, and public safety.

## Features

- 📊 **Interactive Data Visualizations**: Explore transportation patterns and crime statistics through dynamic charts and graphs
- 🗺️ **Geographic Analysis**: Analyze transit accessibility across different neighborhoods
- 📈 **Correlation Studies**: Understand the relationship between income levels and transportation access
- 🔍 **Database Integration**: Complete database schema and sample queries for data analysis

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **UI Components**: shadcn/ui, Tailwind CSS
- **Charts**: Recharts
- **Database**: PostgreSQL
- **Styling**: Tailwind CSS with custom theming

## Getting Started

### Prerequisites

- Node.js v18 or higher
- PostgreSQL 13 or higher
- 4GB RAM minimum
- 10GB storage minimum

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/PDream12/Mapping-Mobility-Analyzing-Public-Transit-Use-in-Staten-Island.git
cd Mapping-Mobility-Analyzing-Public-Transit-Use-in-Staten-Island
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up the database:
\`\`\`bash
psql -d your_database -f sql/schema.sql
psql -d your_database -f sql/sample_data.sql
\`\`\`

4. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

The application will be available at \`http://localhost:3000\`

5. Add to personal code base:
npx shadcn@latest add "https://v0.dev/chat/b/b_nfK8eLjh2RZ?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..cr8SVPzVmcKJzwzn.Q6TLVJTuDUQDo0r_nAFQQYODxj76DWHJ2M02DVtF16PbM-riSO3VxgY2-iw.XTxrXnphkaa5Rwuc2No6nw"

## Project Structure

- \`/app\` - Next.js 14 app directory containing pages and layouts
- \`/components\` - Reusable React components
- \`/lib\` - Utility functions and shared code
- \`/public\` - Static assets
- \`/sql\` - Database schema and queries

## Key Features

### Transportation Analysis
- Average wait times by neighborhood
- Transit coverage analysis
- Income correlation with transit accessibility
- Vehicle availability statistics

### Crime Data Integration
- Crime rate visualization
- Safety correlation with transit usage
- Temporal crime pattern analysis

- ### Interactive Visualizations
- Income vs. Transit Wait Times
- Transit Accessibility Scores
- Neighborhood Comparison Tools

## Maintenance

### Regular Tasks
- Daily database backups
- Weekly performance monitoring
- Monthly data quality checks

### Data Updates
- Transit data: Updated daily
- Crime statistics: Updated weekly
- Census data: Updated annually

## Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Staten Island Transportation Data
- NYC Open Data
- U.S. Census Bureau
- Contributors and maintainers

## Contact

Project Link: [https://github.com/PDream12/Mapping-Mobility-Analyzing-Public-Transit-Use-in-Staten-Island](https://github.com/PDream12/Mapping-Mobility-Analyzing-Public-Transit-Use-in-Staten-Island)

