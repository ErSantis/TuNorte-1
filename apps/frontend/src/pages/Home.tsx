import { useAuth } from '../hooks/useAuth';
import { useGetSubjects } from "../hooks/useGetSubjects";
import { Navbar } from '../components/Navbar';
import { SubjectList } from '../components/SubjectList';
import '../styles/Home.css';

export const Home = () => {
  const { user, logout } = useAuth();
  const { data, isLoading, error } = useGetSubjects(user.idstudent);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading additional data</div>;

  return (
    <>
      <Navbar user={user} logout={logout} />
      <div className="container mt-4">
        <SubjectList data={data!} />
      </div>
    </>
  );
};