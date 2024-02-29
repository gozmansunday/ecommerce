// Local Imports
import { Container } from "../shared/container";

export const Footer = () => {
  return (
    <div className="border-t ">
      <Container className="flex items-center justify-center p-4">
        <p className="text-sm">
          &copy; 2024 FakeStore, Inc. All Rights Reserved
        </p>
      </Container>
    </div>
  );
};
