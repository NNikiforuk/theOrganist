"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Form from "@components/Form"

const AddSong = () => {
  const [submitting, setSubmitting] = useState(false);
  const [song, setSong] = useState({
    title: "",
    tag: "",
  });

  const addSong = async (e) => {

  }


  return (
    <div>
      <Form type="Add" song={song} setSong={setSong} submitting={submitting} addSong={addSong} />
    </div>
  )
}

export default AddSong
