import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PageTemplate from '../../components/PageTemplate';

interface Tool {
  name: string;
  content: string;
}

interface Category {
  title: string;
  tools: Tool[];
}

export default function LogManagement() {
  const categories: Category[] = [
    {
      title: "Log Shippers/Collectors",
      tools: [
        {
          name: "Cribl",
          content: "A tool we specialize in for efficient log collection and beyond. Cribl Stream collects logs from a wide range of sources—think Kubernetes, AWS, or on-prem systems—using its flexible integrations. It's designed to handle high data volumes, making it ideal for both federal and private sector clients."
        },
        {
          name: "Vector",
          content: "A lightweight, high-performance log shipper written in Rust, known for its speed (claimed to be 10x faster than alternatives) and efficiency in collecting, processing, and transmitting logs. It supports a variety of destinations and uses the Vector Remap Language (VRL) for complex data manipulation."
        },
        {
          name: "Filebeat",
          content: "A lightweight log shipper from the Elastic Stack, designed for efficient log forwarding with minimal resource usage. It collects logs from files and forwards them to systems like Logstash or Elasticsearch, ideal for resource-constrained environments."
        },
        {
          name: "Fluentd",
          content: "An open-source log collector we often recommend for cloud-native environments. With over 500 plugins, it collects logs from diverse sources like syslog, JSON, or APIs, ensuring your data is captured reliably."
        },
        {
          name: "Fluent Bit",
          content: "An open-source, lightweight log collector optimized for high performance in constrained environments. It provides built-in metrics and interfaces for centralized collectors like Fluentd, often used in cloud-native setups."
        },
        {
          name: "Logstash",
          content: "Part of the Elastic Stack, a robust collector we recommend for teams needing extensive input options. It supports over 500 plugins to gather logs from sources like syslog or files, making data collection seamless."
        },
        {
          name: "Rsyslog",
          content: "A high-performance, open-source log shipper implementing the Syslog protocol. It supports a wide range of inputs and outputs, including TCP, TLS, and RELP, and can deliver over one million messages per second to local destinations."
        },
        {
          name: "Syslog-ng",
          content: "Another open-source collector we suggest for syslog-focused environments. It gathers logs from network devices and applications, ensuring reliable data capture."
        },
        {
          name: "Logagent",
          content: "A cross-platform, lightweight log parser and shipper written in Node.js. It's smart and efficient, designed to handle log collection and forwarding with minimal resource usage."
        }
      ]
    },
    {
      title: "Systems of Analysis",
      tools: [
        {
          name: "Splunk",
          content: "A leader in log analytics, which we often recommend for organizations needing deep insights. Its Search Processing Language lets you query logs with precision, and features like Live Tail provide real-time visibility."
        },
        {
          name: "Elastic Stack (Elasticsearch & Kibana)",
          content: "A top choice for log analytics. Elasticsearch indexes your logs for fast searching, while Kibana provides visualization through dashboards."
        },
        {
          name: "Graylog",
          content: "An open-source log analytics platform with enterprise options, focusing on centralized log analysis, real-time querying, and alerting, cost-effective for managing large log volumes."
        },
        {
          name: "Sematext",
          content: "A cloud-based analytics solution we recommend for its ease of use. Built on Elasticsearch and Kibana, it offers powerful search and visualization, with real-time alerting to keep your team proactive."
        },
        {
          name: "Better Stack",
          content: "A modern analytics platform we suggest for cloud-focused teams. It uses ClickHouse for efficient querying and integrates with Grafana for visualization, giving you clear insights into your logs."
        },
        {
          name: "OpenObserve",
          content: "An open-source analytics platform we recommend for cost-conscious teams. It provides high-performance querying and visualization, helping you derive insights from large log datasets."
        },
        {
          name: "Grafana Loki",
          content: "A lightweight analytics solution we recommend for teams using Grafana. It indexes log metadata for efficient querying and pairs with Grafana for visualization, offering clear insights."
        },
        {
          name: "OpenSearch",
          content: "An open-source search and analytics suite with strong log analytics capabilities. It supports real-time analytics, visualization via OpenSearch Dashboards, and vector search for AI applications, making it ideal for large-scale data analysis."
        }
      ]
    }
  ];

  return (
    <PageTemplate title="Log Management & Analytics">
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 2, md: 4 },
          color: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        {/* Introduction section */}
        <Typography
          variant="h4"
          sx={{
            color: '#fff',
            mb: 4,
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 600
          }}
        >
          Introduction to Log Management and Analytics
        </Typography>

        <Typography sx={{ mb: 4, lineHeight: 1.8, fontSize: { xs: '1rem', md: '1.1rem' } }}>
          As a consultant, I often see organizations conflate log management and analytics with broader observability, but it's critical to understand their distinct roles in your operations. Log management and analytics focus specifically on collecting, processing, and analyzing log data—those detailed records of system and application activity that tell us what's happening under the hood.
        </Typography>

        <Typography sx={{ mb: 6, lineHeight: 1.8, fontSize: { xs: '1rem', md: '1.1rem' } }}>
          Let me walk you through some leading systems that can transform how your organization handles logs, ensuring efficiency and clarity across your federal and private sector operations.
        </Typography>

        {/* Categories */}
        {categories.map((category) => (
          <Box key={category.title} sx={{ mb: 6 }}>
            <Typography
              variant="h5"
              sx={{
                color: '#fff',
                mb: 3,
                fontSize: { xs: '1.3rem', md: '1.6rem' },
                fontWeight: 600
              }}
            >
              {category.title}
            </Typography>
            
            {/* Tools in each category */}
            {category.tools.map((tool) => (
              <Accordion 
                key={tool.name}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 2,
                  '&:before': {
                    display: 'none',
                  },
                  '&.Mui-expanded': {
                    margin: '0 0 16px 0',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  },
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    transform: 'translateY(-2px)',
                  },
                  borderRadius: '8px !important',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#7FFF00' }} />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '4px',
                      backgroundColor: 'rgba(123, 63, 228, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      fontWeight: 500,
                      color: '#fff',
                    }}
                  >
                    {tool.name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 3, pb: 4 }}>
                  <Typography sx={{ 
                    lineHeight: 1.8, 
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    color: 'rgba(255, 255, 255, 0.8)',
                  }}>
                    {tool.content}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        ))}
      </Box>
    </PageTemplate>
  );
} 