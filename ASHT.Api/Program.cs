using ASHT.Application;
using ASHT.Infrastructure;
using ASHT.Persistent;
using Microsoft.EntityFrameworkCore;
using System.Reflection;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddApplicationServices();
builder.Services.AddInfrastructureServices(builder.Configuration);
builder.Services.AddDbContext<ASHTDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("ASHTApiWithMultiUIDB")));
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly()));



//builder.Services.AddControllers();
//Swagger config
var myNamedPolicy = "_myAllowMultiClientOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myNamedPolicy, policy =>
    {
        //policy.AllowAnyOrigin()
        policy.WithOrigins("http://localhost:4200")
                .AllowAnyHeader()
                .AllowAnyMethod();
    });
});

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

//using (var serviceScope = app.Services.GetRequiredService<IServiceScopeFactory>().CreateScope())
//{
//    var dbContextOptionBuilder = new DbContextOptionsBuilder<ASHTDbContext>().UseSqlServer(app.Configuration["ConnectionStrings:ASHTApiWithMultiUIDB"]);
//    var ashStockDbContext = new ASHTDbContext(dbContextOptionBuilder.Options);
//    ashStockDbContext.Database.SetCommandTimeout(TimeSpan.FromMinutes(10));
//    ashStockDbContext.Database.Migrate();
//}


app.Run();
