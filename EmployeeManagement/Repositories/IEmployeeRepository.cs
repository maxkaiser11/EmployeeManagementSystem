using EmployeeManagement.Models;

namespace EmployeeManagement.Repositories
{
    public interface IEmployeeRepository
    {
        // CRUD
        Task<IEnumerable<Employee>> GetAllAsync();

        Task<Employee?> GetByIdAsync(int id);

        Task AddEmployeeAsync(Employee employee);

        Task UdpateEmployeeAsync(Employee employee);

        Task DeleteEmployeeAsync(int id);
    }
}
