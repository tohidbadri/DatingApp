using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegister
    {

        [Required]
        public string Username { get; set; }
        [StringLength(8,MinimumLength = 4, ErrorMessage = "You Must Specify Type Minimum 4 Charachter for password")]
        public string Password { get; set; }
    }
}   