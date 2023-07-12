import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js"
import autocolors from "chartjs-plugin-autocolors"

ChartJS.register(autocolors, CategoryScale, LinearScale, BarElement, Tooltip)
