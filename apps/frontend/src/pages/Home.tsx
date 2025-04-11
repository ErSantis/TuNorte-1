import { useAuth } from '../hooks/useAuth';
import { useGetSubjects } from "../hooks/useSubjects";
import { Navbar } from '../components/course/Navbar';
import { SubjectList } from '../components/home/SubjectList';
import '../styles/Home.css';
import Spinner from '../components/Spinner';
import ErrorComponent from '../components/ErrorComponent';

export const Home = () => {

  const { user, logout } = useAuth();
  const { data, isLoading, error } = useGetSubjects(user.idstudent);

  if (isLoading) return <div><Spinner /></div>;
  if (error || !data) return <ErrorComponent message={'Error loading  subjects'} />;

  return (
    <div className="homePage">
      <Navbar user={user} logout={logout} />
      <main>
        <div className="container mt-4">
          <SubjectList data={data} />
        </div>
      </main>
    </div>
  );
};