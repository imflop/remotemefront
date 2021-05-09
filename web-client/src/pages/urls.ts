import IndexPage from "./index/IndexPage";
import JobDetail from "./jobs/jobDetail/JobDetail";

export default [
    {
        path: ["/", "/:scope"],
        exact: true,
        component: IndexPage
    },
    {
        path: "/jobs/:uuid",
        component: JobDetail,
    },
];
