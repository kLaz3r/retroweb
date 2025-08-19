"use client";
import { useState } from "react";

export default function AdminPage() {
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const testAuth = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/test");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = (await res.json()) as { message: string };
      setApiResponse(data.message);
    } catch (error) {
      setApiResponse("Error connecting to API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>
      <div className="space-y-4">
        <button
          onClick={testAuth}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Testing..." : "Test Admin API Access"}
        </button>
        {apiResponse && (
          <div className="rounded-md bg-gray-100 p-4">
            API Response: {apiResponse}
          </div>
        )}
      </div>
    </div>
  );
}
