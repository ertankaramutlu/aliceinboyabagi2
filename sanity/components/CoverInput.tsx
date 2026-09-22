import { useRef, useState, type DragEvent, type ChangeEvent } from "react";
import { set, useClient, type ObjectInputProps } from "sanity";

type CoverValue = {
  _type?: "image";
  asset?: { _type: "reference"; _ref: string };
};

export function CoverInput(props: ObjectInputProps<CoverValue>) {
  const { value, onChange, readOnly } = props;
  const client = useClient({ apiVersion: "2025-01-01" });
  const fileRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [over, setOver] = useState(false);

  if (value?.asset?._ref) {
    return props.renderDefault(props);
  }

  async function upload(file: File | undefined) {
    if (!file || readOnly || !file.type.startsWith("image/")) return;
    setBusy(true);
    try {
      const asset = await client.assets.upload("image", file);
      onChange(
        set({
          _type: "image",
          asset: { _type: "reference", _ref: asset._id },
        }),
      );
    } finally {
      setBusy(false);
    }
  }

  function onDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setOver(false);
    void upload(event.dataTransfer.files[0]);
  }

  function onPick(event: ChangeEvent<HTMLInputElement>) {
    void upload(event.target.files?.[0]);
    event.target.value = "";
  }

  return (
    <div
      onDragEnter={(event) => {
        event.preventDefault();
        setOver(true);
      }}
      onDragOver={(event) => {
        event.preventDefault();
        setOver(true);
      }}
      onDragLeave={() => setOver(false)}
      onDrop={onDrop}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        minHeight: "10rem",
        padding: "1.25rem",
        border: `1px dashed ${over ? "#2276fc" : "#c5c5c5"}`,
        borderRadius: "0.375rem",
        background: over ? "rgba(34, 118, 252, 0.06)" : "transparent",
        textAlign: "center",
      }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 16.5V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2.5M12 4v12m0-12 4 4m-4-4L8 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p style={{ margin: 0, fontSize: "0.875rem" }}>
        {busy ? "Yükleniyor…" : "Sürükle bırak veya dosya yükle"}
      </p>
      <button
        type="button"
        disabled={busy || readOnly}
        onClick={() => fileRef.current?.click()}
        style={{
          border: "none",
          background: "none",
          padding: 0,
          color: "#2276fc",
          fontSize: "0.875rem",
          cursor: busy || readOnly ? "default" : "pointer",
          textDecoration: "underline",
        }}
      >
        Dosya yükle
      </button>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        hidden
        disabled={busy || readOnly}
        onChange={onPick}
      />
    </div>
  );
}
