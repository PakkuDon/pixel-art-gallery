import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js"
// Disable type-check otherwise build fails with Type error: Module '"..."' has no default export.
// @ts-ignore
import autocolors from "chartjs-plugin-autocolors"

ChartJS.register(autocolors, CategoryScale, LinearScale, BarElement, Tooltip)
