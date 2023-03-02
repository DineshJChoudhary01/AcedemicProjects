package org.fi.productstatus.login;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/EmployeeAuthenticate")
public class EmployeeAuthenticate extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String employeeName = request.getParameter("employeeName");
		String password = request.getParameter("password");

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			try (Connection connection = DriverManager.getConnection("jdbc:mysql://root@localhost/actspatna",
					"root@localhost", "password");
					PreparedStatement psAuthenticate = connection
							.prepareStatement("select * from employee where employeeName=? and password=?")) {

				psAuthenticate.setString(1, employeeName);
				psAuthenticate.setString(2, password);

				try (ResultSet result = psAuthenticate.executeQuery();) {
					if (result.next()) {
						HttpSession session=request.getSession(true);
						session.setAttribute("employeeName",employeeName);
						response.sendRedirect("employeeWorking.html");
					} else {
						response.sendRedirect("employeeLogin.html");
					}
				}
			} catch (SQLException sql) {
				sql.printStackTrace();
			}

		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

}
