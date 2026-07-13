using ASHT.Domain.Interface;
using ASHT.Infrastructure.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ASHT.Infrastructure
{
    public static class ConfigureService
    {
        public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<ICategoryService, CategoryService>();
            services.AddScoped<ISubCategoryService, SubCategoryService>();
            services.AddScoped<IProductService, ProductService>();

            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IRoleService, RoleService>();
            services.AddScoped<IRolePrivilegeService, RolePrivilegeService>();
            services.AddScoped<IPrescriptionDetailService, PrescriptionDetailService>();
            services.AddScoped<IAppointmentService, AppointmentService>();

            return services;
        }
    }
}
