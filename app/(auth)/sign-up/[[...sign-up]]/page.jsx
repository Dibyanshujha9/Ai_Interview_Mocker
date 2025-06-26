import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e0f2ff 0%, #bae0ff 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: 32,
          borderRadius: 12,
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          maxWidth: 400,
          width: '100%',
        }}
      >
        <SignUp />
      </div>
    </div>
  );
}
