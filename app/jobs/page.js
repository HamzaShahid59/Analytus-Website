import dbConnect from "@/lib/mongoose";
import Job from "@/models/job";
import JobsClient from "@/components/JobsClient";

export const dynamic = "force-dynamic";

export default async function JobsPage() {
  await dbConnect();

  const jobs = await Job.find({})
    .sort({ updatedAt: -1, createdAt: -1 }) // latest updated/created first
    .lean();

  // make it serialization safe for client component
  const safeJobs = jobs.map((j) => ({
    ...j,
    _id: j._id?.toString?.() ?? String(j._id),
    postedBy: j.postedBy?.toString?.() ?? (j.postedBy ? String(j.postedBy) : null),
    createdAt: j.createdAt ? new Date(j.createdAt).toISOString() : null,
    updatedAt: j.updatedAt ? new Date(j.updatedAt).toISOString() : null,
  }));

  return <JobsClient jobs={safeJobs} />;
}
