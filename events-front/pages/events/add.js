import Layout from "../../components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { API_URL } from "@config/index";

export default function AddEventPage() {
  return (
    <Layout title="Add New Event">
      <h1>Add Event</h1>
    </Layout>
  );
}
